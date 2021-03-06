import { RazorAction } from '../base';
import RazorCli from '../base/RazorCli';
import { jsonStringify } from '@razors/cli-plugin-util';

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
