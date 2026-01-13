import { DocSearch } from '@docsearch/react';
import '@docsearch/css';
import './DocSearch.css';

export function UiDocSearch() {
  return (
    <DocSearch
      appId={process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID ?? ''}
      indexName={process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME ?? ''}
      apiKey={process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY ?? ''}
      askAi={{
        assistantId: 'askAIDemo',
        searchParameters: {
          facetFilters: ['language:en'],
        },
      }}
      insights={true}
      placeholder='Search docs'
    />
  );
}
