import { commandList, createCommand } from '../command';
export function run() {
  commandList.forEach(command => {
    createCommand(command);
  });
}
