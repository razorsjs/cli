import { BaseInquirer } from './BaseInquirer';
import { Question } from 'inquirer';
import {beforeHook} from '../utils/decorators/EventEmitter';

export class CreateInquirer extends BaseInquirer {
  private question: Question;
  private question1: Question;

  constructor() {
    super();
    this.question = {
      type: 'checkbox',
      message: 'test',
      name: 'te',
      choices: [
        'a',
        'b',
        'c'
      ]
    }
    this.question1 = {
      type: 'checkbox',
      message: 'test1',
      name: 'test1',
      choices: [
        'a',
        'b',
        'c'
      ]
    }
  }

  @beforeHook()
  start() {
    this.inquirer
      .prompt([
        this.question,
        this.question1
      ])
      .then(answers => {
        console.log(answers);
      });
  }
}

export default new CreateInquirer();
