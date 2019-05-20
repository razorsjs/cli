const singleTonInstance = Symbol('singleTonInstance');

export function singleTon(ctor: any) {
  const _singleTon: any = new Proxy(ctor, {
    construct(target, args) {
      if (!_singleTon[singleTonInstance]) {
        _singleTon[singleTonInstance] = Reflect.construct(target, args);
      }
      return _singleTon[singleTonInstance];
    },
  });
  return _singleTon;
}
