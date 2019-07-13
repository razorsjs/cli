import { isUndefined } from '../type';

export function objectInit(obj, key) {
  if (isUndefined(obj[key])) {
    obj[key] = {};
  }
}
