import BaseCommand from './BaseCommand';

export class Create extends BaseCommand {
  constructor() {
    super();
  }

  init() {
    this.program
      .command('create')
      .description('create a project or lerna project or lerna package')
      .action(function() {
        console.log('setup');
      });
  }
}

export default new Create();
