import razorCli, { RazorCli } from './RazorCli';
import { INpmPackage } from '../../@types/razorCli';

export abstract class RazorPlugin {
  abstract pkgs?: INpmPackage[];
  abstract order?: string
  razorCli: RazorCli;

  protected constructor() {
    this.razorCli = razorCli;
  }

  init() {

  }
}
