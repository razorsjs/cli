import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';

export class RazorCli extends EventEmitter {
  public version: string;
  public config: ICreateConfig;

  constructor() {
    super();

    this.version = version;
    this.config = {};
  }
}

export default new RazorCli();
