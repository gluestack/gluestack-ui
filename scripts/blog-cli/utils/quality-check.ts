import type { DraftContent } from '../types';
import { countWords } from './reading-time';

export interface QualityCheckResult {
  pass: boolean;
  issues: string[];
}

export function qualityCheck(
  draft: DraftContent,
  targetWordCount: number
): QualityCheckResult {
  const issues: string[] = [];

  // Word count check
  const wordCount = countWords(draft.mdxBody);
  const minWords = Math.floor(targetWordCount * 0.8);
  const maxWords = Math.ceil(targetWordCount * 1.2);
  if (wordCount < minWords) {
    issues.push(
      `Word count ${wordCount} is below minimum ${minWords} (target: ${targetWordCount})`
    );
  }
  if (wordCount > maxWords) {
    issues.push(
      `Word count ${wordCount} exceeds maximum ${maxWords} (target: ${targetWordCount})`
    );
  }

  // Heading hierarchy check
  const headings = draft.mdxBody.match(/^#{1,6}\s+.+$/gm) || [];
  const h1Count = headings.filter((h) => h.startsWith('# ')).length;
  if (h1Count === 0) {
    issues.push('No H1 heading found');
  }
  if (h1Count > 1) {
    issues.push(`Found ${h1Count} H1 headings — should be exactly 1`);
  }

  // Check for duplicate headings
  const headingTexts = headings.map((h) => h.replace(/^#+\s+/, '').toLowerCase());
  const seen = new Set<string>();
  for (const ht of headingTexts) {
    if (seen.has(ht)) {
      issues.push(`Duplicate heading: "${ht}"`);
    }
    seen.add(ht);
  }

  // Import check — at minimum we need Box
  if (!draft.mdxBody.includes('import') || !draft.mdxBody.includes('Box')) {
    issues.push('Missing gluestack UI component imports');
  }

  // Check TOC matches headings
  const tocMatch = draft.mdxBody.match(/<TOC\s+items=\{?\[([\s\S]*?)\]\}?\s*\/>/);
  if (tocMatch) {
    const tocItems = tocMatch[1].match(/id:\s*["']([^"']+)["']/g) || [];
    const tocIds = tocItems.map((m) => {
      const idMatch = m.match(/id:\s*["']([^"']+)["']/);
      return idMatch ? idMatch[1] : '';
    });

    const h2Headings = headings.filter((h) => h.startsWith('## '));
    const h2Ids = h2Headings.map((h) => {
      const text = h.replace(/^##\s+/, '');
      return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');
    });

    for (const id of tocIds) {
      if (!h2Ids.includes(id)) {
        issues.push(`TOC references id "${id}" but no matching H2 heading found`);
      }
    }
  }

  // Check for empty sections (consecutive ## headings without content between)
  const sectionRegex = /##\s+.+\n([\s\S]*?)(?=##\s+.+|<TOC|$)/g;
  let match;
  while ((match = sectionRegex.exec(draft.mdxBody)) !== null) {
    const content = match[1].trim();
    if (content.length < 50) {
      issues.push(`Section appears empty or too short after a ## heading`);
      break; // Only report once
    }
  }

  return {
    pass: issues.length === 0,
    issues,
  };
}