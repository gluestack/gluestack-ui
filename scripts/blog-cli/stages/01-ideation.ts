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

Return ONLY a valid JSON array of exactly 5 topic suggestions. No markdown, no explanation, just the JSON array. Each item must have this exact shape:
{"title": "string", "angle": "string", "keywords": ["string"], "difficulty": "easy"|"medium"|"hard"}

Example response:
[{"title":"Example Title","angle":"Unique angle","keywords":["keyword1","keyword2"],"difficulty":"easy"}]

Rank by SEO potential (highest first). Do NOT suggest topics already covered.`;

function extractJSONArray(text: string): TopicSuggestion[] | null {
  // Try direct parse first
  try {
    const parsed = JSON.parse(text.trim());
    if (Array.isArray(parsed)) return parsed;
  } catch {}

  // Try stripping markdown fences
  try {
    const cleaned = text.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim();
    const parsed = JSON.parse(cleaned);
    if (Array.isArray(parsed)) return parsed;
  } catch {}

  // Try finding a JSON array in the text
  const startIdx = text.indexOf('[');
  const endIdx = text.lastIndexOf(']');
  if (startIdx !== -1 && endIdx > startIdx) {
    try {
      const extracted = text.slice(startIdx, endIdx + 1);
      const parsed = JSON.parse(extracted);
      if (Array.isArray(parsed)) return parsed;
    } catch {}
  }

  return null;
}

export async function runIdeation(
  provider: AIProvider,
  config: PipelineConfig
): Promise<StageResult<string>> {
  try {
    const existingTopics = config.existingSlugs.join(', ');
    const userPrompt = `Suggest 5 blog topics for gluestack-ui. Existing blog posts (avoid these): ${existingTopics}`;

    const response = await provider.chat({
      system: IDEATION_SYSTEM,
      user: userPrompt,
      jsonMode: true,
    });

    if (config.verbose) {
      log.info('  Raw AI response:');
      log.info(response.substring(0, 500));
    }

    let suggestions = extractJSONArray(response);

    // Retry without jsonMode if parsing failed
    if (!suggestions) {
      log.warn('  JSON parse failed, retrying with simpler prompt...');
      const retryResponse = await provider.chat({
        system: IDEATION_SYSTEM,
        user: userPrompt + '\n\nIMPORTANT: Return ONLY the JSON array, no other text.',
        jsonMode: false,
      });

      suggestions = extractJSONArray(retryResponse);
    }

    if (!suggestions || suggestions.length === 0) {
      return { ok: false, error: 'AI returned no topic suggestions. Try providing a topic with --topic instead.', recoverable: true };
    }

    // Present suggestions to user
    const choices = suggestions.map((s) => ({
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