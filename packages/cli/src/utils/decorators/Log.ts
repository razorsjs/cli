import { wrapper, Position } from '../wrapper';

export function log(message: string, position: Position = 'before') {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const temp = descriptor.value;
    const hookFunc = function() {
      console.log(message)
    };
    descriptor.value = wrapper(temp, hookFunc, position);
  };
};
