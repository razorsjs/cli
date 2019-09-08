import { ILayer } from '../@types';

export class Layer implements ILayer {
  opts: any;
  name: any;
  // middlewareStack
  stack: any;
  path: string;
  methods: Array<string>;

  constructor(path: string, methods, middleware, opts?: any) {
    this.opts = opts || {};
    this.name = this.opts.name || null;
    this.stack = Array.isArray(middleware) ? middleware : [middleware];
    // ensure middleware is a function
    this.stack.forEach((fn) => {
      const type = (typeof fn);
      if (type !== 'function') {
        throw new Error(
          methods.toString() + ' `' + (this.opts.name || path) + '`: `middleware` '
          + 'must be a function, not `' + type + '`',
        );
      }
    });
    this.path = path;
    this.methods = methods
  }

  match(path: string) {
    return this.path === path
  }
}
