import { AokRouter } from '@razors/aok-router/src/aokRouter';

export class AokCliRouter extends AokRouter {
  command(command: string, fn: any) {
    super.register(command, ['command'], fn, {});
  }
}
