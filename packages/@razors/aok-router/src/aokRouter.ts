import { Layer } from './layer';
import { IMatched, ILayer } from '../@types';
import { compose } from '@razors/aok';

// correspond with koa-router
export const matchedAll = 'matched';
export const matchedRoute = '_matchedRoute';
export const matchedRouteName = '_matchedRouteName';

export class AokRouter {
  layer: any;
  opts: any;
  stack: Array<ILayer> = [];

  constructor(opts?: any, router?: any) {
    this.layer = router || Layer;
    this.opts = opts || {};
  }

  /**
   * return an middleware for aok
   */
  routes() {
    const router = this;
    return function(ctx, next) {
      // get path, ues ctx.path
      const path = ctx.path;
      // get method
      const method = ctx.method;
      // get matched
      const matched = router.match(path, method);
      // 可能有多个matched
      if (ctx[matchedAll]) {
        ctx[matchedAll].push.apply(ctx.matched, matched.path);
      } else {
        ctx[matchedAll] = matched.path;
      }
      // if has not matched
      if (!matched.route) return next();
      const matchedLayers = matched.pathAndMethod;
      const mostSpecificLayer = matchedLayers[matchedLayers.length - 1];
      ctx[matchedRoute] = mostSpecificLayer.path;
      if (mostSpecificLayer.name) {
        ctx[matchedRouteName] = mostSpecificLayer.name;
      }
      const layerChain = matchedLayers.reduce(function(memo, layer) {
        // memo.push(function(ctx, next) {
        //   ctx.captures = layer.captures(path, ctx.captures);
        //   ctx.params = layer.params(path, ctx.captures, ctx.params);
        //   ctx.routerName = layer.name;
        //   return next();
        // });
        return memo.concat(layer.stack);
      }, []);

      return compose(layerChain)(ctx, next);
    };
  }

  match(path: string, method: string): IMatched {
    const layers = this.stack;
    let layer: ILayer;
    const matched: IMatched = {
      // match path
      path: [],
      // match path and method
      pathAndMethod: [],
      route: false,
    };
    for (let len = layers.length, i = 0; i < len; i++) {
      layer = layers[i];

      if (layer.match(path)) {
        matched.path.push(layer);

        // if all methods or has method
        if (layer.methods.length === 0 || ~layer.methods.indexOf(method)) {
          matched.pathAndMethod.push(layer);
          if (layer.methods.length) matched.route = true;
        }
      }
    }

    return matched;
  }

  register(path, methods: Array<string>, middleware, opts) {
    // support array of paths
    if (Array.isArray(path)) {
      path.forEach((p) => {
        this.register(p, methods, middleware, opts);
      });

      return this;
    }
    // create route
    const route = new this.layer(path, methods, middleware, opts);
    this.stack.push(route);

    return route;
  }
}
