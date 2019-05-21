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
    generateConfig.npmList.push(presetsBase);
    if (type === EProjectType.LPROJECT) {
      generateConfig.npmList.push(lerna);
      generateConfig.orderList.push('../node_modules/.bin/lerna init');
    }
  }

  generateTypescript() {
    generateConfig.npmList.push(presetsTypescript, typescript);
  }

  run() {

  }
}

export default new BaseGenerate();
