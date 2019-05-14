import programInstance, { Program } from '../program';
import { Command } from 'commander';

export default class BaseCommand {
  protected programInstance: Program;
  protected program: Command;

  constructor() {
    this.programInstance = programInstance;
    this.program = this.programInstance.program;
  }
}
