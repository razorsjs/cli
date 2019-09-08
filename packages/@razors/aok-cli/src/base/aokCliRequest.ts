import { AokRequest } from '@razors/aok';

export class AokCliRequest extends AokRequest {}

const request = new AokCliRequest();

// use name as path
Object.defineProperty(request, 'path', {
  get(): any {
    return this.req.command.name;
  },
});

// all methods is command
Object.defineProperty(request, 'method', {
  get(): any {
    return 'command';
  },
});

export default request;
