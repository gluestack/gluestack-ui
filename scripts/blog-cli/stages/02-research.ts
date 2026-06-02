import type { AIProvider, PipelineConfig, ResearchResult, StageResult } from '../types';

const RESEARCH_SYSTEM = `You are an SEO research specialist. Given a blog topic, analyze the search landscape and return a JSON object with this exact shape:

{
  "primaryKeyword": "string — the best primary keyword to target",
  "secondaryKeywords": ["string — 3-5 supporting keywords"],
  "searchIntent": "informational" | "navigational" | "transactional" | "commercial",
  "angle": "string — unique angle/differentiator for this article",
  "competitorGaps": ["string — 2-3 gaps in existing content on this topic"]
}

Focus on realistic, achievable keywords. Be specific about the angle — it should differentiate from generic content.`;

export async function runResearch(
  provider: AIProvider,
  topic: string,
  config: PipelineConfig
): Promise<StageResult<ResearchResult>> {
  try {
    const userKeywords = config.seoKeywords.length > 0
      ? `\n\nThe user wants to target these keywords: ${config.seoKeywords.join(', ')}. Make one of these the primary keyword if appropriate.`
      : '';

    const response = await provider.chat({
      system: RESEARCH_SYSTEM,
      user: `Research the blog topic: "${topic}"${userKeywords}`,
      jsonMode: true,
    });

    let result: ResearchResult;
    try {
      const cleaned = response.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      result = JSON.parse(cleaned);
    } catch {
      return { ok: false, error: 'Failed to parse research JSON', recoverable: true };
    }

    // Validate required fields
    if (!result.primaryKeyword || !result.secondaryKeywords || !result.angle) {
      return { ok: false, error: 'Research missing required fields', recoverable: true };
    }

    // Merge user keywords if provided
    if (config.seoKeywords.length > 0) {
      const merged = [...new Set([...config.seoKeywords, ...result.secondaryKeywords])];
      result.secondaryKeywords = merged.slice(0, 5);
    }

    return { ok: true, data: result };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: true };
  }
}