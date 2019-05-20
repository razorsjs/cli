import { RazorInquirer } from '../base';
import { typescriptQuestion } from '../question/cn';
import { beforeHook } from '../utils/decorators/EventEmitter';

export class TypescriptInquirer extends RazorInquirer {

  constructor() {
    super();
  }

  @beforeHook()
  async start() {
    const answers = await this.inquirer.prompt([
      typescriptQuestion,
    ]);
    Object.assign(this.config, answers);
  }
}
