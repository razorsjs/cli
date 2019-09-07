export default function(ctx, next) {
  ctx.log = console.log;
  next()
}
