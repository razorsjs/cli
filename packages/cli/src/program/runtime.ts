import { schedules } from './schedules';
import { runCommand, runInquirer } from './run';
import { BaseCommand, VersionCommand, RazorInquirer } from '../base';
import { RazorCli } from '../base';

export function runSchedule() {
  schedules.forEach(schedule => {
    // TODO: RazorCommand
    const scheduleInstance = new schedule()
    if (scheduleInstance instanceof BaseCommand || scheduleInstance instanceof VersionCommand) {
      runCommand(scheduleInstance);
    } else if (scheduleInstance instanceof RazorInquirer) {
      runInquirer(scheduleInstance)
    }
  });

}
