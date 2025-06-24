import { log } from '@clack/prompts';
import { Command } from 'commander';

export const help = new Command()
  .name('help')
  .description('Display help for a command')
  .action(() => {
    try {
      log.message(`
        \x1b[36m- Init and add components\x1b[0m
          \x1b[33mnpx gluestack-ui-nightly@latest\x1b[0m
        
        \x1b[36m- Init gluestack-ui\x1b[0m
          \x1b[33mnpx gluestack-ui-nightly@latest init\x1b[0m
          
        \x1b[36m- Add component\x1b[0m
          \x1b[33mnpx gluestack-ui-nightly@latest add <component-name>\x1b[0m
        
        \x1b[36m- Add all component\x1b[0m
          \x1b[33mnpx gluestack-ui-nightly@latest add --all\x1b[0m
        
        \x1b[36m- Help\x1b[0m
          \x1b[33mnpx gluestack-ui-nightly@latest help\x1b[0m`);
    } catch (err) {
      log.error(`\x1b[31mError: ${(err as Error).message}\x1b[0m`);
      process.exit(1);
    }
  });
