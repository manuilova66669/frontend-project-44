#!/usr/bin/env node

import { Command } from 'commander';
import runCalcGame from '../src/games/calc.js';

const program = new Command();

program
  .name('brain-calc')
  .description('What is the result of the expression?')
  .version('1.0.0')
  .action(() => {
    runCalcGame();
  });

program.parse(process.argv);
