import { Razor } from '../program';
import { Command } from 'commander';
import * as commander from 'commander';

const program = new commander.Command();

export abstract class BaseCommand {
  abstract name: string;
  abstract description: string;

  abstract action(): void;

  public program: Command;

  protected constructor() {
    // super();
    this.program = program;
  }
}

export abstract class VersionCommand extends Razor {

  abstract version: string;
  public program: Command;

  protected constructor() {
    super();
    this.program = program;
  }
}

export type RazorCommand = BaseCommand | VersionCommand;
