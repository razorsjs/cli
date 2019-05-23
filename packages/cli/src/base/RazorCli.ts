import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';

export class RazorCli extends EventEmitter {
  /**
   * version of razorCli
   */
  public version: string;
  /**
   * createConfig
   */
  public createConfig: ICreateConfig;

  constructor() {
    super();

    this.version = version;
    this.createConfig = {};
  }
}

export default new RazorCli();
