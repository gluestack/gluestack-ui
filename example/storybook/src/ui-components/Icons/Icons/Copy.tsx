import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { Path, G } from 'react-native-svg';

const CopyIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3.33334 10H2.66668C2.31305 10 1.97392 9.85953 1.72387 9.60949C1.47382 9.35944 1.33334 9.0203 1.33334 8.66668V2.66668C1.33334 2.31305 1.47382 1.97392 1.72387 1.72387C1.97392 1.47382 2.31305 1.33334 2.66668 1.33334H8.66668C9.0203 1.33334 9.35944 1.47382 9.60949 1.72387C9.85953 1.97392 10 2.31305 10 2.66668V3.33334"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

CopyIcon.displayName = 'CopyIcon';

export { CopyIcon };
