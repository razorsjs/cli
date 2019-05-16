import { Question } from 'inquirer';
import {EProjectType} from '../constant';

export const projectTypeQuestion: Question = {
  type: 'checkbox',
  message: '选择要创建的项目类型',
  name: 'projectType',
  choices: [
    {
      name: '普通项目',
      value: EProjectType.PROJECT
    },
    {
      name: 'lerna项目',
      value: EProjectType.LPROJECT
    },
    {
      name: 'lerna包',
      value: EProjectType.LPACKAGE
    },
  ],
};
