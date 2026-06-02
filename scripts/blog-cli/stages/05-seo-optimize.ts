import type {
  AIProvider,
  DraftContent,
  PipelineConfig,
  ResearchResult,
  SEOAnalysis,
  StageResult,
} from '../types';
import { countWords } from '../utils/reading-time';
import { log } from '@clack/prompts';

const SEO_SYSTEM = `You are an SEO optimization expert. Analyze the given blog draft and return a JSON object with this exact shape:

{
  "title": "string — optimized title under 60 characters, include primary keyword",
  "description": "string — optimized meta description under 160 characters",
  "ogAltText": "string — alt text for the OpenGraph image",
  "keywordDensity": {
    "primaryKeyword": 0.0,
    "secondaryKeyword1": 0.0
  },
  "headingStructurePass": true/false,
  "headingIssues": ["string — any heading hierarchy issues"],
  "readabilityScore": 0-100,
  "suggestions": ["string — 3-5 specific suggestions to improve SEO"],
  "improvedSections": {
    "sectionHeading": "improved MDX content for that section"
  }
}

Focus on:
- Title must be under 60 chars and include the primary keyword
- Description must be under 160 chars and compel clicks
- Keyword density should be 1-2% for primary, 0.5-1% for secondary
- Heading hierarchy must be valid (H1 once, H2s for sections, no skipped levels)
- Readability should score 70+ (short sentences, clear language)
- Only suggest improved sections that genuinely need better keyword integration
- Do NOT rewrite the entire article — only sections with poor SEO`;

export async function runSeoOptimize(
  provider: AIProvider,
  draft: DraftContent,
  research: ResearchResult,
  config: PipelineConfig
): Promise<StageResult<SEOAnalysis>> {
  try {
    log.step('Optimizing SEO...');

    const response = await provider.chat({
      system: SEO_SYSTEM,
      user: `Analyze and optimize this blog draft for SEO.

PRIMARY KEYWORD: "${research.primaryKeyword}"
SECONDARY KEYWORDS: ${research.secondaryKeywords.join(', ')}

DRAFT CONTENT:
${draft.mdxBody.substring(0, 8000)}

${draft.mdxBody.length > 8000 ? '(content truncated for analysis — focus on title, meta, intro, and heading structure)' : ''}`,
      jsonMode: true,
    });

    let analysis: SEOAnalysis;
    try {
      const cleaned = response.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      analysis = JSON.parse(cleaned);
    } catch {
      return { ok: false, error: 'Failed to parse SEO analysis JSON', recoverable: true };
    }

    // Calculate actual keyword density
    const wordCount = countWords(draft.mdxBody);
    const primaryCount = (draft.mdxBody.toLowerCase().match(new RegExp(research.primaryKeyword.toLowerCase(), 'g')) || []).length;
    const primaryDensity = wordCount > 0 ? (primaryCount / wordCount) * 100 : 0;

    analysis.keywordDensity = {
      [research.primaryKeyword]: Math.round(primaryDensity * 100) / 100,
    };

    // Apply improved sections if any
    if (analysis.improvedSections && Object.keys(analysis.improvedSections).length > 0) {
      let improvedMdx = draft.mdxBody;
      for (const [sectionHeading, improvedContent] of Object.entries(analysis.improvedSections)) {
        // Find the section in the draft and replace it
        const sectionRegex = new RegExp(
          `(##\\s+${sectionHeading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n[\\s\\S]*?)(?=\\n##\\s+|\\n<TOC|$)`,
          'i'
        );
        improvedMdx = improvedMdx.replace(sectionRegex, improvedContent as string);
      }
      analysis.improvedMdx = improvedMdx;
    }

    // Report
    const titleOk = analysis.title.length <= 60;
    const descOk = analysis.description.length <= 160;
    const densityOk = primaryDensity >= 1 && primaryDensity <= 2;

    log.info(`  Title: "${analysis.title}" (${titleOk ? 'OK' : 'TOO LONG'} — ${analysis.title.length} chars)`);
    log.info(`  Description: ${descOk ? 'OK' : 'TOO LONG'} — ${analysis.description.length} chars)`);
    log.info(`  Keyword density: ${primaryDensity.toFixed(2)}% (${densityOk ? 'OK' : 'ADJUST'})`);

    if (!titleOk || !descOk) {
      log.warn('  SEO scores below threshold — consider adjusting title or description');
    }

    return { ok: true, data: analysis };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: true };
  }
}