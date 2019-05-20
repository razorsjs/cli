import { BaseCommand } from '../base/RazorCommand';
import CreateInquirer from '../inquirer/create';

export class Create extends BaseCommand {
  name: string = 'create';
  description: string = 'create a project';

  constructor() {
    super();
  }

  action() {
    CreateInquirer.start()
  }
}

export default new Create();
