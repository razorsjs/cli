import { VersionCommand } from '../base';
import RazorCli from '../base/RazorCli'

export class Version extends VersionCommand {
  version: string = RazorCli.version;

  constructor() {
    super();
  }
}
