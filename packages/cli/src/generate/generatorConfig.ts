import { IRazorPkg } from '../../@types/razorCli';

export class GeneratorConfig {
  /**
   * package.json
   */
  public pkg: IRazorPkg = {
    dependencies: {},
    devDependencies: {},
  };
  public npmClient: string = 'npm';
  /**
   * the orders which run after install
   */
  public orderList: string[] = [];

  constructor() {

  }

  init() {
    this.pkg = {
      dependencies: {},
      devDependencies: {},
    }
  }

  pushDep(...args: string[]) {
    if (this.pkg.dependencies) {
      const dependencies = this.pkg.dependencies;
      args.forEach(name => {
        dependencies[name] = 'latest';
      });
    }
  }

  pushDev(...args: string[]) {
    if (this.pkg.dependencies) {
      const dependencies = this.pkg.dependencies;
      args.forEach(name => {
        dependencies[name] = 'latest';
      });
    }
  }
}

export default new GeneratorConfig();
