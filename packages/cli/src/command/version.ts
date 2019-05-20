import { VersionCommand } from '../base/RazorCommand';
import { version } from '../../package.json';

export class Version extends VersionCommand {
  version: string = '';

  constructor() {
    super();
  }
}

export default new Version();
