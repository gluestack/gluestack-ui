import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const PlayIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 8L16 12L10 16V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

PlayIcon.displayName = 'PlayIcon';

export { PlayIcon };
