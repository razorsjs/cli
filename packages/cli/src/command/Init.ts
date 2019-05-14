import BaseCommand from './BaseCommand';

export class Init extends BaseCommand {
  constructor() {
    super();
  }

  init() {
    this.program
      .command('init')
      .description('run remote setup commands')
      .action(function() {
        console.log('setup');
      });
  }
}

export default new Init();
