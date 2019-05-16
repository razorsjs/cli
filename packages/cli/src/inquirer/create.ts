import { BaseInquirer } from './BaseInquirer';
import { projectTypeQuestion } from '../question/cn';
import { beforeHook } from '../utils/decorators/EventEmitter';

export class CreateInquirer extends BaseInquirer {

  constructor() {
    super();
  }

  @beforeHook()
  async start() {
    const answers = await this.inquirer.prompt([
      projectTypeQuestion,
    ]);
    Object.assign(this.config, answers);
  }
}

export default new CreateInquirer();
