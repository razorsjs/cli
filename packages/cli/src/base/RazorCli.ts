import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import path from 'path';
import { GeneratorConfig } from '../generate/generatorConfig';
import { IRazorPlugin } from '../../@types/razorPlugin';

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
   * the dir where project is created in
   */
  public targetDir: string;

  /**
   * the file need to be created or copied
   */
  public files: object;

  /**
   * key: action name
   * value: class extends from base action
   */
  public action: object;

  constructor() {
    super();

    this.version = version;
    this.createConfig = {};
    this.generatorConfig = new GeneratorConfig();
    this.targetDir = path.resolve('./');
    this.files = {};
    this.action = {};
  }

  /**
   * init internal action, command
   */
  init() {
    // read from package.json
  }

  /**
   * get relative path
   * @param filePath
   */
  resolveDir(filePath) {
    return path.resolve(this.targetDir, filePath);
  }

  /**
   * use plugin, load plugin on this
   */
  use(plugin: IRazorPlugin) {
    Object.assign(this.action, plugin.action);
  }
}

export default new RazorCli();
