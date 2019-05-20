import { BaseCommand } from './AbstractCommand';
import CreateInquirer from '../inquirer/create';

export class Create extends BaseCommand {
  name: string = 'create';
  description: string = 'create a project';

  constructor() {
    super();
  }

  action() {
    console.log(123);
    CreateInquirer.start()
  }
}

export default new Create();
