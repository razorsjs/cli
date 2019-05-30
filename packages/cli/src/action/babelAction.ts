/*copy for temporary*/
import { RazorAction } from '../base/RazorAction';
import RazorCli from '../base/RazorCli';
import generateConfig from '../generate/generatorConfig'

export class BabelAction extends RazorAction {

  prefix = 'node_modules/@razors/presets-base/';
  fileList = ['.babelrc'];

  constructor() {
    super();
  }

  action() {
    this.fileList.forEach(file => {
      const filePath = this.prefix + file;
      RazorCli.files[file] = RazorCli.resolveDir(filePath)
    });
    generateConfig.push({
      name: '@babel/runtime',
      dependencies: '^7.4.5'
    })
  }
}
