import { RazorCommand } from '../base/razorCommand';

export function createCommand() {
  const cc = new RazorCommand('cc <file>', 'test');
  cc.use(function(ctx, next) {
    console.log(ctx.program);
    next();
  });
  cc.listen();
}
