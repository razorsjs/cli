import { RazorInquirer } from '../base';
import { projectTypeQuestion } from '../question/cn';
import { beforeHook } from '../utils/decorators/EventEmitter';
import RazorCli from '../base/RazorCli'

export class CreateInquirer extends RazorInquirer {

  constructor() {
    super();
  }

  @beforeHook()
  async start() {
    const answers = await this.inquirer.prompt([
      projectTypeQuestion,
    ]);
    Object.assign(RazorCli.createConfig, answers);
  }
}
