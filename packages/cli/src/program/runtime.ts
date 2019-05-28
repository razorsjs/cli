import { runAction, runCommand, runInquirer } from './run';
import { BaseCommand, VersionCommand, RazorInquirer, EndCommand } from '../base';
import { RazorAction } from '../base/RazorAction';

export async function runSchedule(schedules) {
  for (let i = 0; i < schedules.length; i++) {
    const schedule = schedules[i];
    const scheduleInstance = new schedule();
    // TODO:type
    if (scheduleInstance instanceof BaseCommand
      || scheduleInstance instanceof VersionCommand
      || scheduleInstance instanceof EndCommand) {
      await runCommand(scheduleInstance);
    } else if (scheduleInstance instanceof RazorInquirer) {
      await runInquirer(scheduleInstance);
    } else if(scheduleInstance instanceof RazorAction) {
      await runAction(scheduleInstance);
    }
  }
}
