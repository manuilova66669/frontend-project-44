#!/usr/bin/env node

import { Command } from 'commander';
import runEvenGame from '../src/games/even.js';

const program = new Command();

program
  .name('brain-even')
  .description('Answer "yes" if the number is even, otherwise answer "no".')
  .version('1.0.0')
  .action(() => {
    runEvenGame();
  });

program.parse(process.argv);
