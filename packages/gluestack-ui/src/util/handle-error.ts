import { log } from '@clack/prompts';

export function handleError(error: unknown) {
  if (typeof error === 'string') {
    log.error(error);
    process.exit(1);
  }

  if (error instanceof Error) {
    log.error(error.message);
    process.exit(1);
  }

  log.error('Something went wrong. Please try again.');
  process.exit(1);
}
