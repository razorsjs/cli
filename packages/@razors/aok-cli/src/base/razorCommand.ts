import { Aok, AokContext } from '@razors/aok';
import Razor from './razor';
import { Delegate } from '../util/delegate';

export class RazorCommandContext extends AokContext {
  constructor() {
    super();
    // delegate
    const delegate = new Delegate(this, 'app.razor');
    delegate
      .getter('inquirer')
      .getter('program');
  }
}

export class RazorCommand extends Aok {
  private razor: any;

  constructor(private name: string, private description: string) {
    super(new RazorCommandContext());
    this.razor = Razor;
  }

  // program.description...
  listen() {
    this.razor
      .program
      .description(this.description)
      .command(this.name)
      .action((...args) => {
        this.trigger({
          args,
        });
      });
  }
}
