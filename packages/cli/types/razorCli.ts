export interface IRazorCli {
  type: 'project' | 'lerna-project' | 'lerna-package',
  useTypescript: boolean
}
