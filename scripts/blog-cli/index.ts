import { intro, log, outro, confirm, isCancel, cancel } from '@clack/prompts';
import { buildConfig } from './config';
import { OpenAIProvider } from './providers/openai';
import { AnthropicProvider } from './providers/anthropic';
import { LiteLLMProvider } from './providers/litellm';
import type {
  AIProvider,
  CLIArgs,
  PipelineConfig,
  PipelineState,
  BlogMetadata,
  StageResult,
} from './types';
import { runIdeation } from './stages/01-ideation';
import { runResearch } from './stages/02-research';
import { runOutline } from './stages/03-outline';
import { runDraft } from './stages/04-draft';
import { runSeoOptimize } from './stages/05-seo-optimize';
import { runImageGen } from './stages/06-image-gen';
import { runFileGen } from './stages/07-file-gen';
import { runUpdateListing } from './stages/08-update-listing';
import { runCommit } from './stages/09-commit';
import { slugify } from './utils/slugify';
import { estimateReadingTime, countWords } from './utils/reading-time';
import { qualityCheck } from './utils/quality-check';
import { writeJSON, readJSON } from './utils/file-io';
import path from 'path';

// ─── CLI Arg Parsing ──────────────────────────────────────────

function parseArgs(argv: string[]): CLIArgs {
  const args: CLIArgs = {
    command: 'create',
    ideate: false,
    wordCount: 1500,
    dryRun: false,
    skipImage: false,
    skipSeo: false,
    fromStage: 1,
    verbose: false,
  };

  let i = 2; // Skip node and script path
  while (i < argv.length) {
    const arg = argv[i];

    switch (arg) {
      case 'create':
      case 'ideate':
      case 'draft':
        args.command = arg as CLIArgs['command'];
        break;
      case '--topic':
        args.topic = argv[++i];
        break;
      case '--ideate':
        args.ideate = true;
        break;
      case '--provider':
        args.provider = argv[++i] as CLIArgs['provider'];
        break;
      case '--model':
        args.model = argv[++i];
        break;
      case '--author':
        args.author = argv[++i];
        break;
      case '--author-json':
        args.authorJson = argv[++i];
        break;
      case '--keywords':
        args.keywords = argv[++i]?.split(',').map((k) => k.trim());
        break;
      case '--word-count':
        args.wordCount = parseInt(argv[++i], 10);
        break;
      case '--cover-style':
        args.coverStyle = argv[++i];
        break;
      case '--dry-run':
        args.dryRun = true;
        break;
      case '--skip-image':
        args.skipImage = true;
        break;
      case '--skip-seo':
        args.skipSeo = true;
        break;
      case '--from-stage':
        args.fromStage = parseInt(argv[++i], 10);
        break;
      case '--verbose':
        args.verbose = true;
        break;
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
    }
    i++;
  }

  return args;
}

function printHelp(): void {
  console.log(`
gluestack Blog CLI — Automated blog article workflow

Usage:
  npx tsx scripts/blog-cli/index.ts <command> [options]

Commands:
  create              Full pipeline: ideation through commit
  ideate              Only suggest topics via AI
  draft               Generate draft from a given topic (skips ideation)

Options:
  --topic <string>        Manual topic (skips ideation stage)
  --ideate                Run AI ideation to suggest topics
  --provider <string>     AI provider: 'openai', 'anthropic', or 'litellm' (default: from env)
  --model <string>        Override default model for chosen provider
  --author <string>       Author name (must match known author)
  --author-json <string>  Full author info as JSON string
  --keywords <string>     Comma-separated SEO keywords to target
  --word-count <number>   Target word count (default: 1500)
  --cover-style <string>  DALL-E prompt style hint
  --dry-run               Generate files but do not git commit
  --skip-image            Skip image generation stage
  --skip-seo              Skip SEO optimization stage
  --from-stage <1-9>      Resume pipeline from a specific stage
  --verbose               Print detailed AI prompts and responses
  --help, -h              Show this help message

Examples:
  npx tsx scripts/blog-cli/index.ts create --ideate --author "Viraj Joshi"
  npx tsx scripts/blog-cli/index.ts create --topic "How to build accessible forms" --provider anthropic
  npx tsx scripts/blog-cli/index.ts ideate --provider openai
  npx tsx scripts/blog-cli/index.ts create --topic "React Native performance" --dry-run --skip-image
`);
}

// ─── Provider Factory ──────────────────────────────────────────

function createProvider(config: PipelineConfig): AIProvider {
  if (config.provider === 'anthropic') {
    return new AnthropicProvider(config.model);
  }
  if (config.provider === 'litellm') {
    return new LiteLLMProvider(config.model);
  }
  return new OpenAIProvider(config.model, config.imageModel);
}

// ─── State Persistence ─────────────────────────────────────────

function statePath(slug: string, websiteDir: string): string {
  return path.join(websiteDir, 'app', 'blogs', slug, '.blog-cli-state.json');
}

function saveState(slug: string, state: PipelineState, websiteDir: string): void {
  writeJSON(statePath(slug, websiteDir), state);
}

function loadState(slug: string, websiteDir: string): PipelineState | null {
  return readJSON<PipelineState>(statePath(slug, websiteDir));
}

// ─── Main Pipeline ─────────────────────────────────────────────

async function runPipeline(cliArgs: CLIArgs): Promise<void> {
  // Build config
  const config = buildConfig({
    provider: cliArgs.provider,
    model: cliArgs.model,
    authorName: cliArgs.author,
    authorJson: cliArgs.authorJson,
    keywords: cliArgs.keywords,
    wordCount: cliArgs.wordCount,
    coverStyle: cliArgs.coverStyle,
    dryRun: cliArgs.dryRun,
    skipImage: cliArgs.skipImage,
    skipSeo: cliArgs.skipSeo,
    fromStage: cliArgs.fromStage,
    verbose: cliArgs.verbose,
  });

  const provider = createProvider(config);

  // Initialize state
  let state: PipelineState = {
    stage: 1,
  };

  // If we have a slug from a previous run, try loading state
  if (cliArgs.fromStage > 1) {
    const existingState = loadState(cliArgs.topic || '', config.websiteDir);
    if (existingState) {
      state = existingState;
      log.info(`Resuming from stage ${cliArgs.fromStage}`);
    }
  }

  // ─── Stage 1: Ideation ─────────────────────────────────────

  if (config.fromStage <= 1) {
    if (cliArgs.topic) {
      // Manual topic provided — skip ideation
      state.topic = cliArgs.topic;
      log.step(`Topic: "${state.topic}"`);
    } else {
      // No topic — auto-ideate
      log.step('No topic provided — generating suggestions...');
      const result = await runIdeation(provider, config);
      if (!result.ok) {
        log.error(`Ideation failed: ${result.error}`);
        log.info('Try providing a topic manually: yarn blog create --topic "Your topic"');
        process.exit(1);
      }
      state.topic = result.data;
    }
    state.stage = 2;
  }

  // If command is just "ideate", we're done
  if (cliArgs.command === 'ideate') {
    if (state.topic) {
      log.info(`Selected topic: ${state.topic}`);
    }
    outro('Topic selected!');
    return;
  }

  if (!state.topic) {
    log.error('No topic available. Use --topic to provide one.');
    process.exit(1);
  }

  const slug = slugify(state.topic);
  log.info(`Slug: ${slug}`);

  // ─── Stage 2: Research ─────────────────────────────────────

  if (config.fromStage <= 2) {
    intro('Stage 2: Research');
    const result = await runResearch(provider, state.topic, config);
    if (!result.ok) {
      log.error(`Research failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.research = result.data;
    state.stage = 3;
    saveState(slug, state, config.websiteDir);
    log.info(`Primary keyword: ${state.research.primaryKeyword}`);
    log.info(`Angle: ${state.research.angle}`);
  }

  // ─── Stage 3: Outline ──────────────────────────────────────

  if (config.fromStage <= 3 && state.research) {
    intro('Stage 3: Outline');
    const result = await runOutline(provider, state.topic, state.research, config);
    if (!result.ok) {
      log.error(`Outline failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.outline = result.data;
    state.stage = 4;
    saveState(slug, state, config.websiteDir);
    log.info(`Title: ${state.outline.title}`);
    log.info(`Sections: ${state.outline.sections.length}`);
  }

  // ─── Stage 4: Draft ────────────────────────────────────────

  if (config.fromStage <= 4 && state.outline) {
    intro('Stage 4: Draft');
    const result = await runDraft(provider, state.outline, config.author, config);
    if (!result.ok) {
      log.error(`Draft failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.draft = result.data;
    state.stage = 5;
    saveState(slug, state, config.websiteDir);

    // Quality check
    const qc = qualityCheck(state.draft, config.targetWordCount);
    if (!qc.pass) {
      log.warn('Quality check issues:');
      qc.issues.forEach((i) => log.warn(`  - ${i}`));
      const proceed = await confirm({
        message: 'Continue despite quality issues?',
        initialValue: true,
      });
      if (isCancel(proceed) || !proceed) {
        cancel('Pipeline stopped at quality check.');
        process.exit(0);
      }
    }
  }

  // ─── Stage 5: SEO Optimization ────────────────────────────

  if (config.fromStage <= 5 && !config.skipSeo && state.draft && state.research) {
    intro('Stage 5: SEO Optimization');
    const result = await runSeoOptimize(provider, state.draft, state.research, config);
    if (!result.ok) {
      log.error(`SEO optimization failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.seo = result.data;

    // Apply SEO improvements to draft
    if (state.seo.improvedMdx) {
      state.draft.mdxBody = state.seo.improvedMdx;
      state.draft.wordCount = countWords(state.seo.improvedMdx);
    }

    state.stage = 6;
    saveState(slug, state, config.websiteDir);
  }

  if (!state.draft) {
    log.error('No draft content available');
    process.exit(1);
  }

  // Build metadata for remaining stages
  const seoTitle = state.seo?.title || state.outline?.title || state.topic;
  const seoDesc = state.seo?.description || `Learn about ${state.topic} with gluestack-ui`;

  const metadata: BlogMetadata = {
    title: seoTitle,
    slug: slugify(seoTitle),
    description: seoDesc,
    coverPath: '/images/blogs/banner-1.png', // Default, updated by image gen
    publishedAt: new Date().toISOString(),
    readingTime: estimateReadingTime(state.draft.wordCount),
    author: [config.author],
    ogImageUrl: '',
  };

  // ─── Stage 6: Image Generation ─────────────────────────────

  if (config.fromStage <= 6 && !config.skipImage) {
    intro('Stage 6: Cover Image');
    const result = await runImageGen(provider, metadata.title, metadata.slug, config);
    if (result.ok) {
      metadata.coverPath = result.data;
    }
    state.stage = 7;
    saveState(slug, state, config.websiteDir);
  }

  // ─── Stage 7: File Generation ──────────────────────────────

  if (config.fromStage <= 7) {
    intro('Stage 7: File Generation');
    const result = await runFileGen(metadata, state.draft.mdxBody, config);
    if (!result.ok) {
      log.error(`File generation failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.generatedFiles = result.data;
    state.stage = 8;
    saveState(slug, state, config.websiteDir);
  }

  // ─── Stage 8: Update Listing ───────────────────────────────

  if (config.fromStage <= 8) {
    intro('Stage 8: Update Listing');
    const result = await runUpdateListing(metadata, config);
    if (!result.ok) {
      log.error(`Listing update failed: ${result.error}`);
      saveState(slug, state, config.websiteDir);
      process.exit(1);
    }
    state.generatedFiles = [...(state.generatedFiles || []), ...result.data];
    state.stage = 9;
    saveState(slug, state, config.websiteDir);
  }

  // ─── Stage 9: Commit ────────────────────────────────────────

  if (config.fromStage <= 9) {
    intro('Stage 9: Commit');
    const result = await runCommit(state.generatedFiles || [], metadata.title, config);
    if (!result.ok) {
      log.error(`Commit failed: ${result.error}`);
      process.exit(1);
    }
  }

  outro(`Blog article "${metadata.title}" created successfully!`);
}

// ─── Entry Point ──────────────────────────────────────────────

async function main(): Promise<void> {
  const args = parseArgs(process.argv);

  try {
    await runPipeline(args);
  } catch (err: any) {
    log.error(`Pipeline error: ${err.message}`);
    if (args.verbose) {
      console.error(err);
    }
    process.exit(1);
  }
}

main();