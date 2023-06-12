import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const ThreeDotsIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6667 8.66667C13.0349 8.66667 13.3333 8.36819 13.3333 8C13.3333 7.63181 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.63181 12 8C12 8.36819 12.2985 8.66667 12.6667 8.66667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33333 8.66667C3.70152 8.66667 4 8.36819 4 8C4 7.63181 3.70152 7.33333 3.33333 7.33333C2.96514 7.33333 2.66667 7.63181 2.66667 8C2.66667 8.36819 2.96514 8.66667 3.33333 8.66667Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

ThreeDotsIcon.displayName = 'ThreeDotsIcon';

export { ThreeDotsIcon };
