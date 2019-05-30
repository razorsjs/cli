import { RazorAction } from '../base/RazorAction';
import RazorCli from '../base/RazorCli';
import path from 'path';
import { mkdirp } from '../util/file';

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
