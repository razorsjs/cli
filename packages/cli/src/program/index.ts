import * as commander from 'commander';
import { Command } from 'commander';
import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';

export class Program extends EventEmitter{
  public program: Command;
  public version: string;
  public config: ICreateConfig;

  constructor() {
    super();
    this.program = new commander.Command();
    this.version = version;
    this.config = {};
  }

  start() {
    this.program
      .version(this.version)
      .parse(process.argv);
  }
}

export default new Program();
