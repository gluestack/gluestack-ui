import React from 'react';
import { createIcon } from '../styled-components';
import { Path } from 'react-native-svg';

export const RemoveIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M5 12H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
