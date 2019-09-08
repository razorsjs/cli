import { Delegate } from '../util/delegate';
import { AokContext } from '@razors/aok';

export class AokCliContext extends AokContext {
  constructor() {
    super();
    // delegate app methods
    new Delegate(this, 'app')
      .getter('program')
      .getter('inquirer')
      .getter('chalk');

    new Delegate(this, 'request').
      getter('path')
  }
}
