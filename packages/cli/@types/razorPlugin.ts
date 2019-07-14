import { RazorAction } from '../src/base';

export interface IRazorPluginAction {
  string: RazorAction
}

export interface IRazorPlugin {
  action?: IRazorPluginAction,
  command?: any
}
