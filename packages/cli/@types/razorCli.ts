import { $Function } from './index';

/**
 * create config
 */
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
  // in lerna project root, it will be true
  private?: boolean
  scripts?: object
  // husky: 🐶 Git hooks made easy
  // https://github.com/typicode/husky
  husky?: object
}

/**
 * npm pkg, used for generating package.json
 */
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
