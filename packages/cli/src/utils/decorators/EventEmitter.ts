import { wrapper, Position } from '../wrapper';
import { EventEmitter } from 'events';
import { isFunction } from '../judge';
import { firstUpperCase } from '../string';

export function functionHook(position: Position = 'before', name?: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (target instanceof EventEmitter || (isFunction(target.emit) && isFunction(target.on))) {
      const temp = descriptor.value;
      const hookFunc = function() {
        const className = target.constructor.name;
        target.emit(name || position + firstUpperCase(className) + firstUpperCase(propertyKey));
      };
      descriptor.value = wrapper(temp, hookFunc, position);
    } else {
      throw Error('please use on EventEmitter or EventEmitter like');
    }
  };
};


export function beforeHook(name?: string) {
  return functionHook('before', name);
}

export function afterHook(name?: string) {
  return functionHook('after', name);
}
