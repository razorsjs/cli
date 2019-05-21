import { VersionCommand } from '../base';
import { version } from '../../package.json';

export class Version extends VersionCommand {
  version: string = '';

  constructor() {
    super();
  }
}
