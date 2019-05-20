import { BaseCommand } from '../base';

export class CreateCommand extends BaseCommand {
  name: string = 'create';
  description: string = 'create a project';

  constructor() {
    super();
  }

  action() {}
}
