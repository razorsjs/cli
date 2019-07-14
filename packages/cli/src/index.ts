#!/usr/bin/env node
import { mainSchedules } from './program/schedules';
import { runSchedule } from './program/runtime';
runSchedule(mainSchedules);
