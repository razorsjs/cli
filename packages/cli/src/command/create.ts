import { BaseCommand } from '../base';
import RazorCli from '../base/RazorCli';
import { runSchedule } from '../program/runtime';
import { CreateInquirer, TypescriptInquirer } from '../inquirer';
import { BasePresetAction, GenerateAction, TypescriptAction } from '../action';

export class CreateCommand extends BaseCommand {
  name: string = 'create <app-name>';
  description: string = 'create a project';
  options: any[];

  constructor() {
    super();
    this.options = [
      ['--npm <presetName>', 'npmClient'],
    ];
  }

  async action(name: string, cmd: any) {
    RazorCli.createConfig.name = name;
    RazorCli.createConfig.npmClient = cmd.npm || 'npm';
    await runSchedule([
      /*inquirer*/
      CreateInquirer,
      TypescriptInquirer,
      /*action*/
      BasePresetAction,
      TypescriptAction,
      GenerateAction,
    ]);
  }
}
