const singleTonInstance = Symbol('singleTonInstance');

export function singleTon(ctor: any) {
  const _singleTon: any = new Proxy(ctor, {
    construct(target, args, newTarget) {
      // should not work in subclass
      if (target.prototype.constructor === newTarget.prototype.constructor) {
        if (!_singleTon[singleTonInstance]) {
          _singleTon[singleTonInstance] = Reflect.construct(target, args);
        }
        return _singleTon[singleTonInstance];
      } else {
        return Reflect.construct(target, args, newTarget);
      }
    },
  });
  return _singleTon;
}
