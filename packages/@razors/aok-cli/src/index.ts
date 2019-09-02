import razor from './base/razor';
import { createCommand } from './command/createCommand';

razor.program.version('0.0.1');
createCommand();
razor.program.parse(process.argv);
