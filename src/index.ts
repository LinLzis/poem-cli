#!/usr/bin/env node

import { program } from 'commander';
import { poemCommand } from './poem';

// eslint-disable-next-line
const { version } = require('../package.json');

async function run() {
  program.storeOptionsAsProperties(false).passCommandToAction(false);
  program.version(
    `Poem cli Version: ${version}`,
    '-v, --version',
    'output the current version',
  );

  // inject sub commands
  poemCommand();

  program.on('--help', () => {
    console.log('');
    console.log('Example call:');
    console.log('  $ poet --help');
  });

  program.parse(process.argv);
}

run();
