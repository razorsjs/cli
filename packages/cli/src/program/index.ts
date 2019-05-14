import * as commander from 'commander';
import { Command } from 'commander';
import { version } from '../../package.json';

export class Program {
  public program: Command;
  public version: string;

  constructor() {
    this.program = new commander.Command();
    this.version = version;
  }

  start() {
    this.program
      .version(this.version)
      .parse(process.argv)
  }
}

export default new Program();
