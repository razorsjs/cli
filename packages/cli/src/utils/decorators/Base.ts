export function before(cb: any) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const temp = descriptor.value;
    descriptor.value = function() {
      cb.call(this);
      temp.call(this);
    };
  };
};
