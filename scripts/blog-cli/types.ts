// ─── AI Provider ───────────────────────────────────────────────

export type AIProviderType = 'openai' | 'anthropic';

export interface AIProvider {
  chat(params: {
    system: string;
    user: string;
    jsonMode: boolean;
  }): Promise<string>;
  generateImage(params: {
    prompt: string;
    size: string;
  }): Promise<Buffer>;
}

// ─── Author ───────────────────────────────────────────────────

export interface AuthorInfo {
  id: number;
  name: string;
  occupation: string;
  avatarUrl: string;
  email: string;
}

// ─── Pipeline Config ──────────────────────────────────────────

export interface PipelineConfig {
  provider: AIProviderType;
  model: string;
  imageModel: string;
  seoKeywords: string[];
  targetWordCount: number;
  author: AuthorInfo;
  coverStyle: string;
  existingSlugs: string[];
  dryRun: boolean;
  skipImage: boolean;
  skipSeo: boolean;
  fromStage: number;
  verbose: boolean;
  websiteDir: string;
}

// ─── Research ─────────────────────────────────────────────────

export interface ResearchResult {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: 'informational' | 'navigational' | 'transactional' | 'commercial';
  angle: string;
  competitorGaps: string[];
}

// ─── Outline ──────────────────────────────────────────────────

export interface OutlineSection {
  heading: string;
  level: number;
  keyPoints: string[];
  hasCodeExample: boolean;
  gluestackComponents: string[];
  subsections: OutlineSection[];
}

export interface Outline {
  title: string;
  introduction: string;
  sections: OutlineSection[];
  conclusion: string;
  targetKeywords: string[];
}

// ─── Draft ────────────────────────────────────────────────────

export interface DraftContent {
  mdxBody: string;
  wordCount: number;
}

// ─── SEO ──────────────────────────────────────────────────────

export interface SEOAnalysis {
  title: string;
  description: string;
  ogAltText: string;
  keywordDensity: Record<string, number>;
  headingStructurePass: boolean;
  headingIssues: string[];
  readabilityScore: number;
  suggestions: string[];
  improvedMdx?: string;
}

// ─── Blog Metadata (for listing) ──────────────────────────────

export interface BlogMetadata {
  title: string;
  slug: string;
  description: string;
  coverPath: string;
  publishedAt: string;
  readingTime: number;
  author: AuthorInfo[];
  ogImageUrl: string;
}

// ─── Pipeline State ───────────────────────────────────────────

export interface PipelineState {
  stage: number;
  topic?: string;
  research?: ResearchResult;
  outline?: Outline;
  draft?: DraftContent;
  seo?: SEOAnalysis;
  metadata?: BlogMetadata;
  coverImagePath?: string;
  generatedFiles?: string[];
}

// ─── Stage Result ─────────────────────────────────────────────

export type StageResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; recoverable: boolean };

// ─── Topic Suggestion ──────────────────────────────────────────

export interface TopicSuggestion {
  title: string;
  angle: string;
  keywords: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// ─── CLI Args ─────────────────────────────────────────────────

export interface CLIArgs {
  command: 'create' | 'ideate' | 'draft';
  topic?: string;
  ideate: boolean;
  provider?: AIProviderType;
  model?: string;
  author?: string;
  authorJson?: string;
  keywords?: string[];
  wordCount: number;
  coverStyle?: string;
  dryRun: boolean;
  skipImage: boolean;
  skipSeo: boolean;
  fromStage: number;
  verbose: boolean;
}