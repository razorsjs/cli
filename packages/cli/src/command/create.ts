import { BaseCommand } from '../base';
import RazorCli from '../base/RazorCli';
import { runSchedule } from '../program/runtime';
import { CreateInquirer, TypescriptInquirer } from '../inquirer';
import { BasePresetAction, GenerateAction, TypescriptAction, CreateProjectAction } from '../action';

export class CreateCommand extends BaseCommand {
  name: string = 'create <app-name>';
  description: string = 'create a project';
  options: any[];

  constructor() {
    super();
    this.options = [
      ['--npm <npmClient>', 'Use specified npm client when installing dependencies'],
    ];
  }

  async action(name: string, cmd: any) {
    RazorCli.createConfig.name = name;
    RazorCli.createConfig.npmClient = cmd.npm;
    await runSchedule([
      /*inquirer*/
      CreateInquirer,
      TypescriptInquirer,
      /*action*/
      CreateProjectAction,
      BasePresetAction,
      TypescriptAction,
      GenerateAction,
    ]);
  }
}
