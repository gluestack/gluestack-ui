#!/usr/bin/env node
import { Command } from 'commander';
import { log } from '@clack/prompts';
import { add } from './commands/add';
import { help } from './commands/help';
import { init } from './commands/init';

process.on('SIGINT', () => {
  log.warning('Operation ended.');
  process.exit(0);
});
process.on('SIGTERM', () => {
  log.warning('Operation cancelled.');
  process.exit(0);
});

async function main() {
  const program = new Command().name('gluestack-ui');
  // Define action for unrecognized commands
  program.action(() => {
    log.error(
      '\x1b[31mInvalid argument. Please specify a command. Use --help for assistance.\x1b[0m'
    );
    process.exit(1);
  });
  program.addCommand(init).addCommand(add).addCommand(help);
  program.parse();
}

main();
