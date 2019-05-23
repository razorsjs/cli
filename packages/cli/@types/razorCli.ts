export interface ICreateConfig {
  type?: 'project' | 'lerna-project' | 'lerna-package',
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
