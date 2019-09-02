import { Command } from 'commander';
import * as commander from 'commander';
import inquirer from 'inquirer'
import { Aok } from '@razors/aok';

/**
 * base class
 */
export class Razor extends Aok{
  public program: Command = new commander.Command();
  public inquirer: inquirer.Inquirer = inquirer;
}

export default new Razor()
