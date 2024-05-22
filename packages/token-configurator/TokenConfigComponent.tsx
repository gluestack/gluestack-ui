import React from 'react';
import CodeEditorComponent from './ui/CodeEditorComponent';
import PreviewComponent from './ui/PreviewComponent';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import ThemeProvider from './util/ThemeProvider';

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
      <div className="flex w-full justify-evenly flex-col sm:flex-row overflow-x-auto">
        <div className="m-8">
          <CodeEditorComponent />
        </div>
        <div className="m-8">
          <PreviewComponent />
        </div>
      </div>
    </>
  );
}
