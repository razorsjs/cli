import { IRazorCliConfig } from '../../types/razorCli';
import { EventEmitter } from 'events';

export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(cli: IRazorCliConfig): void {

  }
}

export default new BaseGenerate();
