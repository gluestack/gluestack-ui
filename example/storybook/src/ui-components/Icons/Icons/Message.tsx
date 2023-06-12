import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const MessageCircleIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M14 7.66666C14.0023 8.54657 13.7967 9.41458 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3333C7.45342 13.3356 6.58541 13.13 5.8 12.7333L2 14L3.26667 10.2C2.86995 9.41458 2.66437 8.54657 2.66667 7.66666C2.66707 6.61449 2.96041 5.58322 3.51381 4.68836C4.06722 3.79349 4.85884 3.07037 5.8 2.59999C6.58541 2.20328 7.45342 1.99769 8.33333 1.99999H8.66667C10.0562 2.07665 11.3687 2.66316 12.3528 3.64723C13.3368 4.63129 13.9233 5.94376 14 7.33332V7.66666Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

MessageCircleIcon.displayName = 'MessageCircleIcon';

export { MessageCircleIcon };
