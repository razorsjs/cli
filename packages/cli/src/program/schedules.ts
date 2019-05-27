import { CreateCommand, Version, End } from '../command';
import { CreateInquirer, TypescriptInquirer } from '../inquirer';
import { BasePresetAction } from '../action/basePresetAction';

export const schedules = [
  /*command*/
  CreateCommand,
  /*inquirer*/
  CreateInquirer,
  TypescriptInquirer,
  /*version*/
  Version,
  /*action*/
  BasePresetAction,
  End,
];
