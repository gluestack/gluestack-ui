import type { AIProvider, PipelineConfig, StageResult, TopicSuggestion } from '../types';
import { log, select, text as clackText, isCancel, cancel } from '@clack/prompts';

const IDEATION_SYSTEM = `You are a content strategy expert for gluestack-ui, a universal React & React Native component library with NativeWind/Tailwind support. Your job is to suggest blog topics with high SEO potential.

gluestack-ui key topics:
- Universal components (React + React Native)
- NativeWind v4 and Tailwind CSS integration
- Copy-paste component architecture
- Design system customization and theming
- Accessibility-first components
- Expo and Next.js integration
- React Server Components support
- Performance optimization for cross-platform apps

Return a JSON array of exactly 5 topic suggestions. Each must have this shape:
{
  "title": "string — compelling blog title",
  "angle": "string — unique angle/differentiator",
  "keywords": ["primary keyword", "secondary1", "secondary2"],
  "difficulty": "easy" | "medium" | "hard"
}

Rank by SEO potential (highest first). Do NOT suggest topics already covered.`;

export async function runIdeation(
  provider: AIProvider,
  config: PipelineConfig
): Promise<StageResult<string>> {
  try {
    // If topic is already provided, skip ideation
    if (config.seoKeywords.length > 0) {
      return { ok: true, data: config.seoKeywords[0] };
    }

    const existingTopics = config.existingSlugs.join(', ');
    const userPrompt = `Suggest 5 blog topics for gluestack-ui. Existing blog posts (avoid these): ${existingTopics}`;

    const response = await provider.chat({
      system: IDEATION_SYSTEM,
      user: userPrompt,
      jsonMode: true,
    });

    let suggestions: TopicSuggestion[];
    try {
      suggestions = JSON.parse(response.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, ''));
    } catch {
      return { ok: false, error: 'Failed to parse AI topic suggestions', recoverable: true };
    }

    if (!Array.isArray(suggestions) || suggestions.length === 0) {
      return { ok: false, error: 'AI returned no topic suggestions', recoverable: true };
    }

    // Present suggestions to user
    const choices = suggestions.map((s, i) => ({
      value: s.title,
      label: s.title,
      hint: `${s.angle} (${s.difficulty})`,
    }));

    choices.push({ value: '__custom__', label: 'Enter a custom topic', hint: 'Type your own' });

    const chosen = await select({
      message: 'Select a topic or enter your own:',
      options: choices,
    });

    if (isCancel(chosen)) {
      cancel('Operation cancelled.');
      process.exit(0);
    }

    if (chosen === '__custom__') {
      const customTopic = await clackText({
        message: 'Enter your topic:',
        placeholder: 'How to build accessible forms with gluestack-ui',
      });
      if (isCancel(customTopic)) {
        cancel('Operation cancelled.');
        process.exit(0);
      }
      return { ok: true, data: customTopic as string };
    }

    return { ok: true, data: chosen as string };
  } catch (err: any) {
    return { ok: false, error: err.message, recoverable: true };
  }
}