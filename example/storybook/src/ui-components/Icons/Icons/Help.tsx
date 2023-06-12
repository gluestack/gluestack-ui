import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { G, Path } from 'react-native-svg';
import React from 'react';

export const HelpCircleIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6.06002 6C6.21676 5.55444 6.52612 5.17874 6.93332 4.93942C7.34053 4.7001 7.81928 4.61262 8.2848 4.69247C8.75033 4.77232 9.17256 5.01435 9.47674 5.37568C9.78091 5.73702 9.94739 6.19435 9.94669 6.66667C9.94669 8 7.94669 8.66667 7.94669 8.66667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 11.3333H8.00667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});
