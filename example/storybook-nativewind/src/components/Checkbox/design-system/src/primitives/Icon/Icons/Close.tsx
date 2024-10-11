import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import Root from '../styled-components/Root';
import { Path } from 'react-native-svg';

const CloseIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const SmallCloseIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <Path
      d="M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z"
      fillRule="evenodd"
      fill="currentColor"
    />
  ),
});

CloseIcon.displayName = 'CloseIcon';
SmallCloseIcon.displayName = 'SmallCloseIcon';

export { CloseIcon, SmallCloseIcon };
