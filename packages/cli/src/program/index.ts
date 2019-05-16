import * as commander from 'commander';
import { Command } from 'commander';
import { version } from '../../package.json';
import { IRazorCliConfig } from '../../@types/razorCli';

export class Program {
  public program: Command;
  public version: string;
  public config: IRazorCliConfig;

  constructor() {
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
