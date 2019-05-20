import { commandList, runCommand } from '../command';
export function run() {
  commandList.forEach(command => {
    runCommand(command);
  });
}
