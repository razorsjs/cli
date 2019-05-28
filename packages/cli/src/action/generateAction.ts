import { RazorAction } from '../base/RazorAction';
import BaseGenerate from '../generate/BaseGenerate';

export class GenerateAction extends RazorAction {
  constructor() {
    super();
  }

  action() {
    BaseGenerate.generate();
  }
}
