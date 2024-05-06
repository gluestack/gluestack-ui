import React from 'react';
import CodeEditorComponent from './ui/CodeEditorComponent';
import PreviewComponent from './ui/PreviewComponent';

import ThemeProvider from './util/ThemeProvider';
import { GluestackUIProvider } from './ui/gluestack-ui-provider/index.web';

export default function TokenConfiguratorBaseComponent() {
  return (
    <ThemeProvider>
      <GluestackUIProvider>
        <Layout />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

export function Layout() {
  return (
    <>
      <div className="flex flex-row">
        <div className="my-4 mx-2">
          <CodeEditorComponent />
        </div>
        <div className="my-4">
          <PreviewComponent />
        </div>
      </div>
    </>
  );
}
