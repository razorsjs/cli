import { compose } from './compose';

export class AokContext {
  app?: any;
  req?: any;
  res?: any;
  onerror?: any;
}

export class AokRequest {
}

export class AokResponse {
}

export class Aok {
  protected middleware: Array<any> = [];

  constructor(
    protected context: AokContext = new AokContext(),
    protected request: AokRequest = new AokRequest(),
    protected response: AokResponse = new AokResponse()) {
  }

  respond(ctx: Object) {
  }

  use(fn: Function) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    this.middleware.push(fn);
    return this;
  }

  createContext(req: any, res: any) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.app = request.app = response.app = this;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    request.ctx = response.ctx = context;
    request.response = response;
    response.request = request;
    return context;
  }

  handleRequest(ctx, fnMiddleware) {
    const onerror = err => {
      ctx.onerror(err);
    };
    const handleResponse = () => {
      this.respond(ctx);
    };
    return fnMiddleware(ctx).then(handleResponse).catch(onerror);
  }

  /**
   * just same name
   */
  callback() {
    const fn = compose(this.middleware);

    const handleRequest = (req: any, res: any) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
  }

  /**
   * manual trigger a request like koa
   * @param req
   * @param res
   */
  trigger(req = {}, res = {}) {
    return this.callback()(req, res);
  }
}
