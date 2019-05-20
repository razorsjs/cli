import { RazorCommand, BaseCommand, VersionCommand } from './AbstractCommand';

export function createCommand(command: any) {
  command
    .program
    .command(command.name)
    .description(command.description)
    .action(command.action);
  command
    .program
    .version(command.version)
    .parse(process.argv);
  // console.log(command);
  // if (command instanceof BaseCommand) {
  //
  // } else {
  //   throw new Error('command must be a subclass of RazorCommand');
  // }
}
