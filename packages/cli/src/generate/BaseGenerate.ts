import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';

export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(cli: ICreateConfig): void {
    console.log(cli);
  }
}

export default new BaseGenerate();
