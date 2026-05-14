import type { PipelineConfig, StageResult } from '../types';
import { gitAdd, gitCommit } from '../utils/git';
import { log } from '@clack/prompts';

export async function runCommit(
  files: string[],
  title: string,
  config: PipelineConfig
): Promise<StageResult<string>> {
  try {
    if (config.dryRun) {
      log.info('  Dry run — skipping git commit');
      log.info(`  Would commit ${files.length} files with message: blog: add '${title}'`);
      return { ok: true, data: 'dry-run' };
    }

    log.step('Committing to git...');

    gitAdd(files);

    const shortHash = gitCommit(`blog: add '${title}'`);
    log.info(`  Committed: ${shortHash}`);

    return { ok: true, data: shortHash };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: false };
  }
}