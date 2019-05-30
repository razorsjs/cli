import { RazorAction } from '../base/RazorAction';
import RazorCli from '../base/RazorCli';
import path from 'path';
import { jsonStringify } from '../util/stringify';

export class TypescriptAction extends RazorAction {
  fileList = {
    'tsconfig.json': {
      path: RazorCli.resolveDir('tsconfig.json'),
      content: function() {
        return jsonStringify({
          'extends': RazorCli.resolveDir('node_modules/@razors/presets-typescript/tsconfig.json'),
        });
      },
    },
  };

  constructor() {
    super();
  }

  action() {
    if (RazorCli.createConfig.useTypescript) {
      Object.assign(RazorCli.files, this.fileList);
    }
  }
}
