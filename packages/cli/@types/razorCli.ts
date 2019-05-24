export interface ICreateConfig {
  projectType?: 'project' | 'lerna-project' | 'lerna-package',
  useTypescript?: boolean
}

export interface IRazorPkg {
  name?: string,
  version?: string
  dependencies?: object,
  devDependencies?: object,
  private?: boolean
  scripts?: object
}

export interface INpmPackage {
  name: string,
  dependencies?: string,
  devDependencies?: string
}

export interface IOrder {
  command: string,
  args?: string[]
}
