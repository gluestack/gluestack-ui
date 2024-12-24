import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path } from 'react-native-svg';

export const MenuIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
