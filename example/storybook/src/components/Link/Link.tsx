import { Root } from './styled-component';
import { createLink } from '@universa11y/link';
import React from 'react';

export const LinkTemp = createLink({
  Root,
});

export const Link = () => {
  return (
    <>
      <LinkTemp href="https://nativebase.io/">NativeBase</LinkTemp>
    </>
  );
};
