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
      <div
        className="flex w-full justify-evenly 

       xl:flex-row 
      overflow-x-auto"
      >
        <div className="m-8 h-12">
          <CodeEditorComponent />
          <h1 className="text-typography-black bg-white"> Hi Hi </h1>
        </div>
        <div className="m-8">
          <PreviewComponent />
        </div>
      </div>
    </>
  );
}
