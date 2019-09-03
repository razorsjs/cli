import { Delegate } from '../util/delegate';
import { AokContext } from '@razors/aok';

export class AokCliContext extends AokContext {
  constructor() {
    super();
    const delegate = new Delegate(this, 'app');
    delegate.getter('program').getter('inquirer');
  }
}
