import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path, G } from 'react-native-svg';

const CheckIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M13.3333 4L5.99999 11.3333L2.66666 8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const CheckCircleIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M8 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8C14.6667 4.318 11.682 1.33333 8 1.33333C4.318 1.33333 1.33334 4.318 1.33334 8C1.33334 11.682 4.318 14.6667 8 14.6667Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M6 8.00001L7.33333 9.33334L10 6.66667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

CheckIcon.displayName = 'CheckIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';

export { CheckIcon, CheckCircleIcon };
