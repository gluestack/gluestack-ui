import type { AIProvider, Outline, OutlineSection, PipelineConfig, ResearchResult, StageResult } from '../types';

const OUTLINE_SYSTEM = `You are a content strategist creating detailed blog outlines. Given a topic and research, create a hierarchical outline for a technical blog post.

Return a JSON object with this exact shape:
{
  "title": "string — compelling, SEO-optimized title",
  "introduction": "string — brief description of what the intro covers",
  "sections": [
    {
      "heading": "string — H2 section heading",
      "level": 2,
      "keyPoints": ["string — bullet points to cover"],
      "hasCodeExample": true/false,
      "gluestackComponents": ["Box", "HStack", "etc — gluestack-ui components used"],
      "subsections": [
        {
          "heading": "string — H3 subsection heading",
          "level": 3,
          "keyPoints": ["string"],
          "hasCodeExample": true/false,
          "gluestackComponents": [],
          "subsections": []
        }
      ]
    }
  ],
  "conclusion": "string — brief description of conclusion",
  "targetKeywords": ["primary keyword", "secondary1", "secondary2"]
}

Rules:
- Include 3-6 main H2 sections (plus Introduction and Conclusion)
- Each section should have 2-4 key points
- Mark sections that need code examples (at least 2-3 sections)
- Reference specific gluestack-ui v3 components where applicable
- The title should be under 60 characters and include the primary keyword`;

export async function runOutline(
  provider: AIProvider,
  topic: string,
  research: ResearchResult,
  config: PipelineConfig
): Promise<StageResult<Outline>> {
  try {
    const response = await provider.chat({
      system: OUTLINE_SYSTEM,
      user: `Create a detailed outline for a blog post.

Topic: "${topic}"
Primary keyword: "${research.primaryKeyword}"
Secondary keywords: ${research.secondaryKeywords.join(', ')}
Unique angle: ${research.angle}
Target word count: ${config.targetWordCount} words

Competitor gaps to address: ${research.competitorGaps.join('; ')}`,
      jsonMode: true,
    });

    let outline: Outline;
    try {
      const cleaned = response.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
      outline = JSON.parse(cleaned);
    } catch {
      return { ok: false, error: 'Failed to parse outline JSON', recoverable: true };
    }

    // Validate
    if (!outline.title || !outline.sections || outline.sections.length < 2) {
      return { ok: false, error: 'Outline missing title or sections', recoverable: true };
    }

    // Merge research keywords
    outline.targetKeywords = [
      research.primaryKeyword,
      ...research.secondaryKeywords.filter((k) => k !== research.primaryKeyword),
    ].slice(0, 6);

    return { ok: true, data: outline };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: true };
  }
}