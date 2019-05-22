import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import { EProjectType, presetsTypescript } from '../constant';
import generateConfig from './generatorConfig';
import { presetsBase, lerna, typescript } from '../constant';

export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(config: ICreateConfig): void {
    generateConfig.init();
    this.generateProject(config.type);
    if (config.useTypescript) {
      this.generateTypescript();
    }
    this.run()
  }

  generateProject(type: any) {
    generateConfig.packageList.push(presetsBase);
    if (type === EProjectType.LPROJECT) {
      generateConfig.packageList.push(lerna);
      generateConfig.orderList.push('../node_modules/.bin/lerna init');
    }
  }

  generateTypescript() {
    generateConfig.packageList.push(presetsTypescript, typescript);
  }

  generatePresets() {

  }

  async run() {
    await this.generatePresets()
  }
}

export default new BaseGenerate();
