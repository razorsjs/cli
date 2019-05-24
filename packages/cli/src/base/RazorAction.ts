import { RazorCli } from './RazorCli';

export abstract class RazorAction {
  protected constructor() {
  }

  abstract action(cli: RazorCli): void
}
