import inquirer from 'inquirer';
import { Razor } from '../program';

export class BaseInquirer extends Razor {
  protected inquirer: inquirer.Inquirer;

  constructor() {
    super();
    this.inquirer = inquirer;
  }
}

export default new BaseInquirer();
