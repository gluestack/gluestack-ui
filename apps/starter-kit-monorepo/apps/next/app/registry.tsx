'use client';
import React, { useRef, useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';
import { AppRegistry } from 'react-native-web';
import { flush } from '@gluestack-ui/utils/nativewind-utils';

export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());
  const isServerInserted = useRef(false);

  useServerInsertedHTML(() => {
    AppRegistry.registerComponent('Main', () => 'main');
    const { getStyleElement } = AppRegistry.getApplication('Main');
    if (!isServerInserted.current) {
      isServerInserted.current = true;
      const styles = [
        getStyleElement(),
        jsxStyleRegistry.styles(),
        flush(),
      ].filter(Boolean);

      jsxStyleRegistry.flush();

      return (
        <>
          {styles.map((style, index) => (
            <React.Fragment key={`style-${index}`}>{style}</React.Fragment>
          ))}
        </>
      );
    }
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
