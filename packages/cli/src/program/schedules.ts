import { CreateCommand, Version, End } from '../command';
import { CreateInquirer, TypescriptInquirer } from '../inquirer';

export const schedules = [
  CreateCommand,
  CreateInquirer,
  TypescriptInquirer,
  Version,
  End,
];
