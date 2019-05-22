export interface INpmPackage  {
  name: string
  isDep?: boolean
}

export class GeneratorConfig {
  public packageList: INpmPackage[] = [];
  public npmClient: string;
  public orderList: string[] = [];

  constructor() {
    this.npmClient = 'npm';
  }

  init() {
    this.packageList = [];
    this.orderList = [];
  }
}

export default new GeneratorConfig();
