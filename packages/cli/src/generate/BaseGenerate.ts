import { EventEmitter } from 'events';
import { EProjectType, presetsTypescript } from '../constant';
import generateConfig from './generatorConfig';
import { presetsBase, lerna, typescript } from '../constant';
import { log } from '../utils/decorators/Log';
import RazorCli from '../base/RazorCli';
import { executeCommand } from '../util/execa';
import { writeFile, copy } from '../util/file';

const config = RazorCli.createConfig;


export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(): void {
    generateConfig.init();
    generateConfig.orderList.push({
      command: generateConfig.npmClient,
      args: ['install'],
    });
    this.generateProject(config.projectType);
    if (config.useTypescript) {
      this.generateTypescript();
    }
    this.run();
  }

  generateProject(type: any) {
    generateConfig.push(presetsBase);
    if (type === EProjectType.LPROJECT) {
      generateConfig.push(lerna);
      generateConfig.orderList.push({
        command: '../node_modules/.bin/lerna',
        args: ['init'],
      });
    }
  }

  generateTypescript() {
    generateConfig.push(presetsTypescript, typescript);
  }

  async prepareDownload() {
    Object.assign(generateConfig.pkg, {
      name: 'test',
      private: true,
    });
    await writeFile('./package.json', JSON.stringify(generateConfig.pkg, null, 2), 'utf-8');
  }

  async install() {
    const order = (generateConfig.orderList.shift()) as any;
    await executeCommand(order.command, order.args);
  }

  async executeOrder() {
    for (let i = 0; i < generateConfig.orderList.length; i++) {
      const order = generateConfig.orderList[i];
      await executeCommand(order.command, order.args);
    }
  }

  async generateFile() {
    for (let i in RazorCli.files) {
      const file = RazorCli.files[i];
      if (typeof file === 'string') {
        copy(file, RazorCli.targetDir);
      } else if (typeof file === 'function') {

      }
    }
  }

  @log('Installing project. This might take a while...')
  async run() {
    /* prepare */
    this.prepareDownload();
    /* install npm package */
    this.install();
    /* generate base file */
    this.generateFile();
    /* execute order */
    await this.executeOrder();
  }
}

export default new BaseGenerate();
