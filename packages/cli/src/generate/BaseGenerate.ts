import { IRazorCli } from '../../types/razorCli';
import { EventEmitter } from 'events';

export class BaseGenerate extends EventEmitter {
  constructor() {
    super();
  }

  generate(cli: IRazorCli): void {

  }
}

export default new BaseGenerate();
