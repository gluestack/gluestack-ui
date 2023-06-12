import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const MailIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M13.3333 2.66666H2.66668C1.9303 2.66666 1.33334 3.26361 1.33334 3.99999V12C1.33334 12.7364 1.9303 13.3333 2.66668 13.3333H13.3333C14.0697 13.3333 14.6667 12.7364 14.6667 12V3.99999C14.6667 3.26361 14.0697 2.66666 13.3333 2.66666Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.6667 4.66666L8.68668 8.46666C8.48086 8.59561 8.24289 8.664 8.00001 8.664C7.75713 8.664 7.51916 8.59561 7.31334 8.46666L1.33334 4.66666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

MailIcon.displayName = 'MailIcon';

export { MailIcon };
