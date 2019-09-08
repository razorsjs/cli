import { AokCli } from '@razors/aok-cli';
import { AokCliRouter } from '../src';

const app = new AokCli();
const route = new AokCliRouter();

route.command('cc', function(ctx, next) {
  console.log('cc');
  next();
});

route.command('dd', function(ctx, next) {
  console.log('dd');
  next();
});

app.use(route.routes());
app.listen();
