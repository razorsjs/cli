import { RazorAction } from '../base/RazorAction';
import { objectInit } from '../utils/object/init';
import RazorCli from '../base/RazorCli';

export class CommitLintAction extends RazorAction {
  constructor() {
    super();
  }

  action(): void {
    /**
     * 1.add commitlint, @commitlint/config-conventional and husky devDependencies in package.json
     *
     * 2.add
     * "husky": {
     *    "hooks": {
     *      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
     *    }
     *  }
     * to package.json
     *
     * 3.add commitlint.config.js to root folder
     **/
    const { generatorConfig, files } = RazorCli;
    generatorConfig.push({
      name: 'commitlint',
      devDependencies: '^8.0.0',
    }, {
      name: 'husky',
      devDependencies: '^3.0.0',
    }, {
      name: '@commitlint/config-conventional',
      devDependencies: '^8.0.0',
    });
    objectInit(generatorConfig.pkg, 'husky');
    (generatorConfig.pkg.husky as object)['commit-msg'] = 'commitlint -E HUSKY_GIT_PARAMS';
    files['commitlint.config.js'] = '';
  }
}
