import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import path from 'path';
import { GeneratorConfig } from '../generate/generatorConfig';

/**
 * The singleton of razorCli
 */
export class RazorCli extends EventEmitter {
  /**
   * version of razorCli
   */
  public version: string;
  /**
   * the create config, will be stored
   */
  public createConfig: ICreateConfig;
  /**
   * the generated json, will not be stored
   */
  public generatorConfig: GeneratorConfig;
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
    this.generatorConfig = new GeneratorConfig();
    this.targetDir = path.resolve('./');
    this.files = {};
  }

  resolveDir(filePath) {
    return path.resolve(this.targetDir, filePath);
  }
}

export default new RazorCli();
