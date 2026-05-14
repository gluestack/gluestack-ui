import path from 'path';
import fs from 'fs';
import type { AIProviderType, AuthorInfo, PipelineConfig } from './types';

// ─── Author Registry ──────────────────────────────────────────

export const KNOWN_AUTHORS: Record<string, AuthorInfo> = {
  'Sanchit Kumar': {
    id: 11,
    name: 'Sanchit Kumar',
    occupation: 'Building gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/101696945?v=4',
    email: '',
  },
  'Viraj Joshi': {
    id: 10,
    name: 'Viraj Joshi',
    occupation: 'Co-author of gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/66306233?v=4',
    email: '',
  },
  'Paridhi Tulsian': {
    id: 10,
    name: 'Paridhi Tulsian',
    occupation: 'Digital Marketing Lead',
    avatarUrl: 'https://avatars.githubusercontent.com/u/230149282?v=4',
    email: '',
  },
  'Rajat Chaudhary': {
    id: 10,
    name: 'Rajat Chaudhary',
    occupation: 'Building gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/59024657?v=4',
    email: '',
  },
  'Pranav MV': {
    id: 10,
    name: 'Pranav MV',
    occupation: 'Product Designer',
    avatarUrl:
      'https://pbs.twimg.com/profile_images/1755143257229541377/tcB6c2VV_400x400.jpg',
    email: '',
  },
  'Sanna Bara': {
    id: 10,
    name: 'Sanna Bara',
    occupation: 'Marketing gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/99402689?v=4',
    email: '',
  },
  'Sravan Kumar Velangi': {
    id: 2,
    name: 'Sravan Kumar Velangi',
    occupation: 'Building gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/62778911?v=4',
    email: '',
  },
  'Tanisha Biswas': {
    id: 2,
    name: 'Tanisha Biswas',
    occupation: 'Product Designer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/82362151?v=4',
    email: '',
  },
  'Suraj Ahmed': {
    id: 1,
    name: 'Suraj Ahmed',
    occupation: 'Building gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/9393975?v=4',
    email: '',
  },
  'Ujjwal Aggarwal': {
    id: 14,
    name: 'Ujjwal Aggarwal',
    occupation: 'Building gluestack-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/98085611?v=4',
    email: '',
  },
  'Gluestack Support Team': {
    id: 12,
    name: 'Gluestack Support Team',
    occupation: 'Support Team',
    avatarUrl:
      'https://avatars.githubusercontent.com/u/120183344?s=200&v=4',
    email: '',
  },
};

// ─── Defaults ─────────────────────────────────────────────────

const DEFAULT_PROVIDER: AIProviderType = 'openai';
const DEFAULT_MODEL = 'gpt-4o';
const DEFAULT_IMAGE_MODEL = 'dall-e-3';
const DEFAULT_WORD_COUNT = 1500;
const DEFAULT_COVER_STYLE = 'modern minimalist gradient with abstract geometric shapes';
const DEFAULT_WEBSITE_DIR = 'apps/website';

// ─── Load .env file ───────────────────────────────────────────

function loadEnvFile(): void {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  }
}

// ─── Resolve Provider ─────────────────────────────────────────

function resolveProvider(cliProvider?: AIProviderType): AIProviderType {
  if (cliProvider) return cliProvider;
  const envProvider = process.env.BLOG_CLI_PROVIDER as AIProviderType;
  if (envProvider === 'openai' || envProvider === 'anthropic') return envProvider;
  if (process.env.OPENAI_API_KEY) return 'openai';
  if (process.env.ANTHROPIC_API_KEY) return 'anthropic';
  return DEFAULT_PROVIDER;
}

// ─── Resolve Author ───────────────────────────────────────────

function resolveAuthor(
  authorName?: string,
  authorJson?: string
): AuthorInfo {
  if (authorJson) {
    try {
      return JSON.parse(authorJson) as AuthorInfo;
    } catch {
      throw new Error(`Invalid author JSON: ${authorJson}`);
    }
  }

  if (authorName) {
    const known = KNOWN_AUTHORS[authorName];
    if (known) return known;
    throw new Error(
      `Unknown author "${authorName}". Known authors: ${Object.keys(KNOWN_AUTHORS).join(', ')}. Use --author-json for custom authors.`
    );
  }

  const envAuthor = process.env.BLOG_CLI_DEFAULT_AUTHOR_NAME;
  if (envAuthor) {
    const known = KNOWN_AUTHORS[envAuthor];
    if (known) return known;
  }

  return KNOWN_AUTHORS['Sanchit Kumar'];
}

// ─── Get Existing Blog Slugs ──────────────────────────────────

function getExistingSlugs(websiteDir: string): string[] {
  const blogsDir = path.join(websiteDir, 'app', 'blogs');
  if (!fs.existsSync(blogsDir)) return [];
  return fs
    .readdirSync(blogsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== '[slug]')
    .map((d) => d.name);
}

// ─── Build Config ─────────────────────────────────────────────

export function buildConfig(
  partial: {
    provider?: AIProviderType;
    model?: string;
    authorName?: string;
    authorJson?: string;
    keywords?: string[];
    wordCount?: number;
    coverStyle?: string;
    dryRun?: boolean;
    skipImage?: boolean;
    skipSeo?: boolean;
    fromStage?: number;
    verbose?: boolean;
    websiteDir?: string;
  } = {}
): PipelineConfig {
  loadEnvFile();

  const websiteDir = path.resolve(
    process.cwd(),
    partial.websiteDir ||
      process.env.BLOG_CLI_WEBSITE_DIR ||
      DEFAULT_WEBSITE_DIR
  );

  const provider = resolveProvider(partial.provider);

  // Validate API keys
  if (provider === 'openai' && !process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is required when provider is openai');
  }
  if (provider === 'anthropic' && !process.env.ANTHROPIC_API_KEY) {
    throw new Error('ANTHROPIC_API_KEY is required when provider is anthropic');
  }

  const author = resolveAuthor(partial.authorName, partial.authorJson);

  return {
    provider,
    model:
      partial.model ||
      process.env.BLOG_CLI_MODEL ||
      (provider === 'anthropic' ? 'claude-sonnet-4-20250514' : DEFAULT_MODEL),
    imageModel:
      process.env.BLOG_CLI_IMAGE_MODEL || DEFAULT_IMAGE_MODEL,
    seoKeywords: partial.keywords || [],
    targetWordCount: partial.wordCount || DEFAULT_WORD_COUNT,
    author,
    coverStyle: partial.coverStyle || DEFAULT_COVER_STYLE,
    existingSlugs: getExistingSlugs(websiteDir),
    dryRun: partial.dryRun ?? false,
    skipImage: partial.skipImage ?? false,
    skipSeo: partial.skipSeo ?? false,
    fromStage: partial.fromStage ?? 1,
    verbose: partial.verbose ?? false,
    websiteDir,
  };
}