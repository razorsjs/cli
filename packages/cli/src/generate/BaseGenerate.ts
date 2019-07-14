import { EventEmitter } from 'events';
import { EProjectType, presetsTypescript } from '../constant';
import generateConfig from './generatorConfig';
import { presetsBase, lerna, typescript } from '../constant';
import { log } from '../utils/decorators/Log';
import RazorCli from '../base/RazorCli';
import { sortObject, writeFile, copy, executeCommand, jsonStringify } from '@razors/cli-plugin-util';

const config = RazorCli.createConfig;


export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  async generate() {
    generateConfig.init();
    await this.generateProject(config.projectType);
    if (config.useTypescript) {
      this.generateTypescript();
    }
    await this.run();
  }

  async generateProject(type: any) {
    /*add command: npm install*/
    generateConfig.orderList.push({
      command: config.npmClient || 'npm',
      args: ['install'],
    });
    generateConfig.push(presetsBase);
    if (type === EProjectType.LPROJECT) {
      generateConfig.push(lerna);
      generateConfig.orderList.push({
        command: RazorCli.resolveDir('node_modules/.bin/lerna'),
        args: ['init'],
      });
    }
  }

  generateTypescript() {
    generateConfig.push(presetsTypescript, typescript);
  }

  async prepareDownload() {
    Object.assign(generateConfig.pkg, {
      name: config.name,
      private: true,
    });
    await writeFile(RazorCli.resolveDir('package.json'), jsonStringify(sortObject(generateConfig.pkg)), 'utf-8');
  }

  async install() {
    const order = (generateConfig.orderList.shift()) as any;
    await executeCommand(order.command, order.args, RazorCli.targetDir);
  }

  async executeOrder() {
    for (let i = 0; i < generateConfig.orderList.length; i++) {
      const order = generateConfig.orderList[i];
      await executeCommand(order.command, order.args, RazorCli.targetDir);
    }
  }

  async generateFile() {
    for (let i in RazorCli.files) {
      const file = RazorCli.files[i];
      if (typeof file === 'string') {
        await copy(file, RazorCli.targetDir + `/${i}`);
      } else if (typeof file === 'object') {
        await writeFile(file.path, await file.content(), 'utf-8');
      }
    }
  }

  @log('Installing project. This might take a while...')
  async run() {
    /* prepare */
    await this.prepareDownload();
    /* install npm package */
    await this.install();
    /* generate base file */
    await this.generateFile();
    /* execute order */
    await this.executeOrder();
  }
}

export default new BaseGenerate();
