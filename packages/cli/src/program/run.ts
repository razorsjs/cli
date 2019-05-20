import { RazorCommand, BaseCommand, VersionCommand } from '../base/RazorCommand';
import { RazorInquirer } from '../base/RazorInquirer';

export function runCommand<T extends RazorCommand>(command: T) {
  if (command instanceof BaseCommand) {
    command
      .program
      .command(command.name)
      .description(command.description)
      .action(command.action);
  } else if (command instanceof VersionCommand) {
    command
      .program
      .version(command.version)
      .parse(process.argv);
  } else {
    throw new Error('command must be a subclass of RazorCommand');
  }
}

export function runInquirer(inquirer: RazorInquirer) {
  if (inquirer instanceof RazorInquirer) {
    inquirer.start()
  } else {
    throw new Error('inquirer must be a subclass of RazorCommand');
  }
}
