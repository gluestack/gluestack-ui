import type { PipelineConfig, StageResult } from '../types';
import { gitAdd, gitCommit } from '../utils/git';
import { log, confirm, isCancel, cancel } from '@clack/prompts';

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

    log.step('Ready to commit');
    log.info(`  ${files.length} files staged`);
    log.info(`  Commit message: blog: add '${title}'`);

    const shouldCommit = await confirm({
      message: 'Commit these changes to git?',
      initialValue: true,
    });

    if (isCancel(shouldCommit)) {
      cancel('Commit cancelled.');
      return { ok: true, data: 'cancelled' };
    }

    if (!shouldCommit) {
      log.info('  Skipping commit. Files are generated but not committed.');
      log.info('  You can review and commit manually when ready.');
      return { ok: true, data: 'skipped' };
    }

    gitAdd(files);

    const shortHash = gitCommit(`blog: add '${title}'`);
    log.info(`  Committed: ${shortHash}`);

    return { ok: true, data: shortHash };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: false };
  }
}