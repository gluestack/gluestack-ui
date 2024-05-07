import React from 'react';
import CodeEditorComponent from './ui/CodeEditorComponent';
import PreviewComponent from './ui/PreviewComponent';

import ThemeProvider from './util/ThemeProvider';
import { GluestackUIProvider } from './ui/gluestack-ui-provider/index.web';
import NativeWindCodeEditorComponent from './ui/NativeWindCodeEditor';
type ThemeConfiguratorProp = {
  isNativewind?: boolean;
};

export default function ThemeConfigurator({
  isNativewind = false,
}: ThemeConfiguratorProp) {
  return (
    <ThemeProvider>
      <GluestackUIProvider>
        <Layout isNativewind={isNativewind} />
      </GluestackUIProvider>
    </ThemeProvider>
  );
}

export function Layout({ isNativewind = false }: ThemeConfiguratorProp) {
  return (
    <>
      <div className="flex flex-row">
        <div className="my-4 mx-2">
          {isNativewind ? (
            <NativeWindCodeEditorComponent />
          ) : (
            <CodeEditorComponent />
          )}
        </div>
        <div className="my-4">
          <PreviewComponent />
        </div>
      </div>
    </>
  );
}
