import { version } from '../../package.json';
import { ICreateConfig } from '../../@types/razorCli';
import { EventEmitter } from 'events';
import { singleTon } from '../utils/decorators/SingleTon';

@singleTon
export class RazorCli extends EventEmitter {
  public version: string;
  public config: ICreateConfig;

  constructor() {
    super();

    this.version = version;
    this.config = {};
  }
}
