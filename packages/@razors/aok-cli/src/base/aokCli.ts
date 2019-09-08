import { Command } from 'commander';
import * as commander from 'commander';
import inquirer from 'inquirer';
import { Aok } from '@razors/aok';
import { ICommand } from '../../@types';
import { isCommand } from '../util/command';
import { AokCliContext } from './aokCliContext';
import chalk, { Chalk } from 'chalk';
import aokCliRequest from './aokCliRequest';

export class AokCli extends Aok {
  public program: Command = new commander.Command();
  public inquirer: inquirer.Inquirer = inquirer;
  public chalk: Chalk = chalk;

  constructor() {
    super(new AokCliContext(), aokCliRequest);
    this.program.version('0.0.1');
  }

  setupCommand(command: ICommand) {
    let program = this.program.command(command.name);
    if (command.description) {
      program = program.description(command.description);
    }
    if (command.options && Array.isArray(command.options)) {
      command.options.forEach(option => {
        program = program.option(option.optionName, option.optionDescription, option.defaultOption);
      });
    }
    program.action((...args) => {
      this.trigger({
        actionArgs: args,
        command,
      });
    });
  }

  listen(commands?: Array<ICommand> | ICommand) {
    if (Array.isArray(commands)) {
      commands.forEach(command => {
        if (isCommand(command)) {
          this.setupCommand(command);
        }
      });
    } else if (isCommand(commands)) {
      this.setupCommand(commands as ICommand);
    }
    this.program.parse(process.argv);
  }
}
