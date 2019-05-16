import BaseCommand from './BaseCommand';
import CreateInquirer from '../inquirer/create';

export class Create extends BaseCommand {
  constructor() {
    super();
  }

  init() {
    this.program
      .command('create')
      .description('create a project or lerna project or lerna package')
      .action(function() {
        CreateInquirer.start();
      });
  }
}

export default new Create();
