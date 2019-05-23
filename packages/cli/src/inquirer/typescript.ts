import { RazorInquirer } from '../base';
import { typescriptQuestion } from '../question/cn';
import { beforeHook } from '../utils/decorators/EventEmitter';
import RazorCli from '../base/RazorCli';

export class TypescriptInquirer extends RazorInquirer {

  constructor() {
    super();
  }

  @beforeHook()
  async start() {
    const answers = await this.inquirer.prompt([
      typescriptQuestion,
    ]);
    Object.assign(RazorCli.createConfig, answers);
  }
}
