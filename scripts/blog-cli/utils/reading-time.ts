export function estimateReadingTime(wordCount: number): number {
  // Average reading speed: ~238 words per minute
  const minutes = wordCount / 238;
  return Math.max(1, Math.round(minutes));
}

export function countWords(text: string): number {
  return text
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/<[^>]+>/g, ' ') // Remove HTML/JSX tags
    .replace(/\{[^}]+\}/g, '') // Remove JSX expressions
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}