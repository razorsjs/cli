import { Command } from 'commander';
import * as commander from 'commander';
import BaseGenerate from '../generate/BaseGenerate';
import { EventEmitter } from "events";

const program = new commander.Command();

export abstract class BaseCommand extends EventEmitter {
  abstract name: string;
  abstract description: string;

  abstract action(): void;

  public program: Command;

  protected constructor() {
    super();
    this.program = program;
  }
}

export abstract class VersionCommand extends EventEmitter {

  abstract version: string;
  public program: Command;

  protected constructor() {
    super();
    this.program = program;
  }
}

export abstract class EndCommand extends EventEmitter {

  public program: Command;

  protected constructor() {
    super();
    this.program = program;
  }
}

export type RazorCommand = BaseCommand | VersionCommand | EndCommand;
