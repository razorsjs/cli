import { AokCli } from '@razors/aok-cli/base/aokCli';

const app = new AokCli();

app.use(function(ctx, next) {
  console.log(ctx.path);
  next();
});

app.listen([
  {
    name: 'cc',
    description: 'testcc',
  },
  {
    name: 'dd',
    description: 'testdd',
  },
]);
