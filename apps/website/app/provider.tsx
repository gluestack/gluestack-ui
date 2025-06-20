'use client';
import React, { useEffect, useState, useContext } from 'react';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { ThemeContext } from '@/utils/context/theme-context';
import { Plus_Jakarta_Sans, Roboto, Source_Code_Pro } from 'next/font/google';
import StyledJsxRegistry from '@/app/registry';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--plus-jakarta-sans',
  weight: ['200', '300', '400', '500', '700', '800'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});
const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--source-code-pro',
  weight: ['300', '400', '500', '700', '900'],
});

export const Provider = ({ children }: any) => {
  const { colorMode } = useContext(ThemeContext);

  return (
    <body
      className={`${plusJakartaSans.variable} ${roboto.variable} ${sourceCodePro.variable} ${colorMode}`}
      style={{
        display: 'flex',
        backgroundColor: 'rgb(var(--color-background-0))',
      }}
      data-theme-id={colorMode}
    >
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <StyledJsxRegistry>
        <GluestackUIProvider mode={colorMode}>{children}</GluestackUIProvider>
      </StyledJsxRegistry>
    </body>
  );
};
