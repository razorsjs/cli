import { Aok } from '../src/aok';

let aok = new Aok();
aok.use(function(ctx, next) {
  ctx.a = 2;
  next()
  return 1
});
aok.use(function(ctx, next) {
  ctx.b = 2;
  next()
  return 2
});
aok.use(function(ctx, next) {
  console.log('end')
  next()
  return 3
});
aok.trigger({mm:2})
