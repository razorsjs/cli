import { schedules } from './schedules';
import { runCommand, runInquirer } from './run';
import { BaseCommand, VersionCommand, RazorInquirer, EndCommand } from '../base';

export async function runSchedule() {
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
    }
  }
}
