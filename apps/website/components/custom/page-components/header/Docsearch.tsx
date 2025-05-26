import { DocSearch } from '@docsearch/react';
import '@docsearch/css';

export function UiDocSearch() {
  return (
    <DocSearch
      appId="MJMXBCRR3E"
      indexName="gluestack"
      apiKey="d8d34832d4dae196256cddb9d0f4449b"
    />
  );
}