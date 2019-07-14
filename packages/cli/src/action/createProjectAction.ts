import { RazorAction } from '../base';
import RazorCli from '../base/RazorCli';
import { mkdirp } from '@razors/cli-plugin-util';

const config = RazorCli.createConfig;

export class CreateProjectAction extends RazorAction {

  constructor() {
    super();
  }

  async action() {
    /*create new dir*/
    await mkdirp(config.name);
    RazorCli.targetDir = RazorCli.resolveDir(`${config.name}`);
  }
}
