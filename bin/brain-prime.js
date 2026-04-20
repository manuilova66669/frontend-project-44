#!/usr/bin/env node

import { Command } from 'commander';
import runPrimeGame from '../src/games/prime.js';

const program = new Command();

program
  .name('brain-prime')
  .description('Answer "yes" if given number is prime. Otherwise answer "no".')
  .version('1.0.0')
  .action(() => {
    runPrimeGame();
  });

program.parse(process.argv);
