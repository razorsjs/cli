import { RazorCommand, BaseCommand, VersionCommand, EndCommand } from '../base';
import { RazorInquirer } from '../base';
import { async } from 'rxjs/internal/scheduler/async';
import { RazorAction } from '../base/RazorAction';

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
  } else if (command instanceof EndCommand) {
    command.end();
  } else {
    throw new Error('command must be a subclass of RazorCommand');
  }
}

export async function runInquirer(inquirer: RazorInquirer) {
  if (inquirer instanceof RazorInquirer) {
    await inquirer.start();
  } else {
    throw new Error('inquirer must be a subclass of RazorCommand');
  }
}

export async function runAction(action: RazorAction) {
  if (action instanceof RazorAction) {
    await action.action();
  } else {
    throw new Error('action must be a subclass of RazorAction');
  }
}
