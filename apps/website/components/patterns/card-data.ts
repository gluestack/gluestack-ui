import { categories, categoryById, patterns, type Pattern } from '@/utils/patterns';
import type { CardPattern } from './PatternCard';

export const toCard = (p: Pattern): CardPattern & { featured?: boolean; added?: string } => ({
  slug: p.slug,
  title: p.title,
  description: p.description,
  category: p.category,
  categoryTitle: categoryById(p.category)?.title ?? p.category,
  components: p.components.length,
  tags: p.tags,
  featured: p.featured,
  added: p.added,
});

export const cardPatterns = () => patterns.map(toCard);
export const categoryCounts = () =>
  categories
    .map((c) => ({ id: c.id, title: c.title, count: patterns.filter((p) => p.category === c.id).length }))
    .filter((c) => c.count > 0);
