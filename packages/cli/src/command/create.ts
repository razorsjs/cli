import { BaseCommand } from '../base';
import { runSchedule } from '../program/runtime';
import { CreateInquirer, TypescriptInquirer } from '../inquirer';
import { BasePresetAction, GenerateAction, TypescriptAction } from '../action';

export class CreateCommand extends BaseCommand {
  name: string = 'create';
  description: string = 'create a project';

  constructor() {
    super();
  }

  async action() {
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
