import inquirer from 'inquirer';
import { Program } from '../program';

export class BaseInquirer extends Program {
  protected inquirer: inquirer.Inquirer;

  constructor() {
    super();
    this.inquirer = inquirer;
  }
}

export default new BaseInquirer();
