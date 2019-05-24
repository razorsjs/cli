import { INpmPackage, IOrder, IRazorPkg } from '../../@types/razorCli';

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
  public orderList: IOrder[] = [];

  /**
   * targetDir
   */
  public targetDir: string = './'

  constructor() {

  }

  init() {
    this.pkg = {
      dependencies: {},
      devDependencies: {},
    };
  }

  push(...args: INpmPackage[]) {
    args.forEach(pkg => {
      if (pkg.dependencies) {
        this.pushDep(pkg);
      } else {
        this.pushDev(pkg);
      }
    });
  }

  pushDep(pkg: INpmPackage) {
    if (this.pkg.dependencies) {
      this.pkg.dependencies[pkg.name] = pkg.dependencies ? pkg.dependencies : 'latest';
    }
  }

  pushDev(pkg: INpmPackage) {
    if (this.pkg.devDependencies) {
      this.pkg.devDependencies[pkg.name] = pkg.devDependencies ? pkg.devDependencies : 'latest';
    }
  }
}

export default new GeneratorConfig();
