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

export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(): void {
    generateConfig.init();
    this.generateProject(config.type);
    if (config.useTypescript) {
      this.generateTypescript();
    }
    this.run();
  }

  generateProject(type: any) {
    generateConfig.pushDev(presetsBase);
    if (type === EProjectType.LPROJECT) {
      generateConfig.pushDep(lerna);
      generateConfig.orderList.push('../node_modules/.bin/lerna init');
    }
  }

  generateTypescript() {
    generateConfig.pushDev(presetsTypescript);
    generateConfig.pushDep(typescript)
  }

  prepareDownload() {
    generateConfig.pkg.name = 'test'
    generateConfig.pkg.private = true
  }

  install() {
    executeCommand(generateConfig.npmClient, [])
  }

  download() {
    this.prepareDownload();
    this.install()
  }

  @log('Installing project. This might take a while...')
  async run() {
    await this.download();
  }
}

export default new BaseGenerate();
