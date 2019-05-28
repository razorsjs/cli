import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import path from 'path'

export class RazorCli extends EventEmitter {
  /**
   * version of razorCli
   */
  public version: string;
  /**
   * generated config
   */
  public createConfig: ICreateConfig;
  /**
   * the dir where project created in
   */
  public targetDir: string;

  /**
   * the file need to be created or copied
   */
  public files: object;

  constructor() {
    super();

    this.version = version;
    this.createConfig = {};
    this.targetDir = path.resolve('./');
    this.files = {};
  }
}

export default new RazorCli();
