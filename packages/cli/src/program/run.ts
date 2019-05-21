import { RazorCommand, BaseCommand, VersionCommand } from '../base';
import { RazorInquirer } from '../base';

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

export async function runInquirer(inquirer: RazorInquirer) {
  if (inquirer instanceof RazorInquirer) {
    await inquirer.start()
  } else {
    throw new Error('inquirer must be a subclass of RazorCommand');
  }
}
