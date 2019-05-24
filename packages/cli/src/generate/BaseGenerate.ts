import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import { EProjectType, presetsTypescript } from '../constant';
import generateConfig from './generatorConfig';
import { presetsBase, lerna, typescript } from '../constant';
import { log } from '../utils/decorators/Log';
import RazorCli from '../base/RazorCli';
import { execa } from '../commonUtil';
import { executeCommand } from '../util/execa';

const config = RazorCli.createConfig;
import { writeFile } from '../util/file';

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
    console.log(type);
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
    for (let i = 0; i < generateConfig.orderList.length; i++) {
      const order = generateConfig.orderList[i];
      await executeCommand(order.command, order.args);
    }
  }

  executeOrder() {

  }

  download() {
    this.prepareDownload();
    this.install();
    this.executeOrder();
  }

  @log('Installing project. This might take a while...')
  async run() {
    await this.download();
  }
}

export default new BaseGenerate();
