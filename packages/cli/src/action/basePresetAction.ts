import { RazorAction } from '../base/RazorAction';
import RazorCli from '../base/RazorCli';
import path from 'path';

export class BasePresetAction extends RazorAction {
  prefix = 'node_modules/@razors/presets-base/';
  fileList = ['.editorconfig', '.gitignore', '.prettierrc'];

  constructor() {
    super();
  }

  action() {
    this.fileList.forEach(file => {
      RazorCli.files[file] = path.resolve(RazorCli.targetDir, this.prefix + file);
    });
  }
}
