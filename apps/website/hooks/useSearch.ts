'use client';

import { create, insert, search, type AnyOrama } from '@orama/orama';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { SearchDocument } from '@/types/search';

export interface SearchHit {
  id: string;
  score: number;
  document: SearchDocument;
}

interface UseSearchReturn {
  query: string;
  setQuery: (q: string) => void;
  hits: SearchHit[];
  isLoading: boolean;
  isReady: boolean;
}

// Module-level cache — only one Orama instance for the whole session
let dbCache: AnyOrama | null = null;
let loadPromise: Promise<AnyOrama> | null = null;

async function getDb(): Promise<AnyOrama> {
  if (dbCache) return dbCache;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    const res = await fetch('/search-index.json');
    if (!res.ok) throw new Error(`Failed to load search index: ${res.status}`);
    const documents: SearchDocument[] = await res.json();

    const db = await create({
      schema: {
        id: 'string',
        title: 'string',
        description: 'string',
        content: 'string',
        path: 'string',
        section: 'string',
        subsection: 'string',
      } as const,
    });

    for (const doc of documents) {
      await insert(db, doc);
    }

    dbCache = db;
    return db;
  })();

  return loadPromise;
}

export function useSearch(): UseSearchReturn {
  const [query, setQueryState] = useState('');
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Pre-warm the index the first time the hook mounts
  useEffect(() => {
    getDb()
      .then(() => setIsReady(true))
      .catch(() => setIsReady(false));
  }, []);

  const setQuery = useCallback((q: string) => {
    setQueryState(q);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!q.trim()) {
      setHits([]);
      return;
    }

    setIsLoading(true);

    debounceRef.current = setTimeout(async () => {
      try {
        const db = await getDb();
        setIsReady(true);

        const results = await search(db, {
          term: q,
          properties: ['title', 'description', 'content'],
          boost: { title: 3, description: 1.5, content: 1 },
          limit: 12,
          tolerance: 1,
        });

        setHits(
          results.hits.map((hit) => ({
            id: hit.id as string,
            score: hit.score,
            document: hit.document as unknown as SearchDocument,
          }))
        );
      } catch {
        setHits([]);
      } finally {
        setIsLoading(false);
      }
    }, 150);
  }, []);

  return { query, setQuery, hits, isLoading, isReady };
}
