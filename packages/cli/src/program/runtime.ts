import { schedules } from './schedules';
import { runCommand, runInquirer } from './run';
import { BaseCommand, VersionCommand, RazorInquirer } from '../base';
import { RazorCli } from '../base';

export async function runSchedule() {
  for (let i = 0; i < schedules.length; i++) {
    const schedule = schedules[i];
    const scheduleInstance = new schedule();
    if (scheduleInstance instanceof BaseCommand || scheduleInstance instanceof VersionCommand) {
      await runCommand(scheduleInstance);
    } else if (scheduleInstance instanceof RazorInquirer) {
      await runInquirer(scheduleInstance);
    }
  }
}
