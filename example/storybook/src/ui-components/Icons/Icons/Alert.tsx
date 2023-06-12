import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { G, Path } from 'react-native-svg';

export const AlertCircleIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 5.33334V8"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 10.6667H8.00667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});
