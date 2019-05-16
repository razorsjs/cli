import inquirer from 'inquirer';
import { EventEmitter } from 'events';

export class BaseInquirer extends EventEmitter {
  protected inquirer: inquirer.Inquirer;

  constructor() {
    super()
    this.inquirer = inquirer;
  }
}

export default new BaseInquirer();
