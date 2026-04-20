#!/usr/bin/env node

import { Command } from 'commander';
import runProgressionGame from '../src/games/progression.js';

const program = new Command();

program
  .name('brain-progression')
  .description('What number is missing in the progression?')
  .version('1.0.0')
  .action(() => {
    runProgressionGame();
  });

program.parse(process.argv);
