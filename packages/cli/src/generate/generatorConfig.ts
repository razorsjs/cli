export interface INpmPackage  {
  name: string
  isDep?: boolean
}

export class GeneratorConfig {
  public npmList: INpmPackage[] = [];
  public npmClient: string;
  public orderList: string[] = [];

  constructor() {
    this.npmClient = 'npm';
  }

  init() {
    this.npmList = [];
    this.orderList = [];
  }
}

export default new GeneratorConfig();
