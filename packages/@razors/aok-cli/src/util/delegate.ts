export class Delegate {

  constructor(public proto: any, public target: string | object) {

  }

  getTarget(proto) {
    if (typeof this.target === 'object') {
      return this.target;
    } else {
      return this.target.split('.').reduce(function(pre, item) {
        return pre[item];
      }, proto);
    }
  }

  getter(prop: string) {
    const that = this;
    Object.defineProperty(this.proto, prop, {
      configurable: true,
      get() {
        const target = that.getTarget(this);
        return target[prop];
      },
    });
    return this
  }

  setter(prop: string) {
    const that = this;
    Object.defineProperty(this.proto, prop, {
      configurable: true,
      set(val): any {
        const target = that.getTarget(this);
        target[prop] = val;
      },
    });
    return this
  }

  access(prop: string) {
    this.getter(prop).setter(prop)
  }
}
