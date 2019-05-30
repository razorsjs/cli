import { $Function } from './index';

export interface ICreateConfig {
  /*name of project*/
  name?: string,
  projectType?: 'project' | 'lerna-project' | 'lerna-package',
  useTypescript?: boolean,
  npmClient?: string
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

export interface IFile {
  path: string
  content?: $Function
}
