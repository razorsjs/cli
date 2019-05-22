import { inquirer } from '../commonUtil/index';
import { RazorCli } from './RazorCli';

export abstract class RazorInquirer extends RazorCli {
  abstract start(): void

  protected inquirer: inquirer.Inquirer;

  protected constructor() {
    super();
    this.inquirer = inquirer;
  }
}
