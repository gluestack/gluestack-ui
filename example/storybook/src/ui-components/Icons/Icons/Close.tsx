import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { G, Path } from 'react-native-svg';

const CloseIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 4L12 12"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const CloseCircleIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8.00001 1.33333C4.31811 1.33333 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10 6L6 10"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 6L10 10"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

CloseIcon.displayName = 'CloseIcon';
CloseCircleIcon.displayName = 'CloseCircleIcon';

export { CloseIcon, CloseCircleIcon };
