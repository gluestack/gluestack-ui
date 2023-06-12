import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path, G } from 'react-native-svg';
import { Root } from '../styled-components';

const LinkIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M6.66667 8.66666C6.95297 9.04942 7.31824 9.36612 7.7377 9.59529C8.15716 9.82446 8.62101 9.96074 9.09777 9.99489C9.57453 10.029 10.0531 9.96024 10.5009 9.79319C10.9487 9.62613 11.3554 9.36471 11.6933 9.02666L13.6933 7.02666C14.3005 6.39799 14.6365 5.55598 14.6289 4.68199C14.6213 3.808 14.2708 2.97196 13.6527 2.35394C13.0347 1.73591 12.1987 1.38535 11.3247 1.37775C10.4507 1.37016 9.60867 1.70614 8.98 2.31333L7.83333 3.45333"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.33334 7.33332C9.04704 6.95057 8.68177 6.63387 8.26231 6.40469C7.84285 6.17552 7.37901 6.03924 6.90224 6.0051C6.42548 5.97095 5.94695 6.03974 5.49911 6.2068C5.05128 6.37386 4.6446 6.63527 4.30668 6.97332L2.30668 8.97332C1.69948 9.60199 1.3635 10.444 1.3711 11.318C1.37869 12.192 1.72926 13.028 2.34728 13.646C2.96531 14.2641 3.80135 14.6146 4.67534 14.6222C5.54933 14.6298 6.39134 14.2938 7.02001 13.6867L8.16001 12.5467"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});
LinkIcon.displayName = 'LinkIcon';

const ExternalLinkIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 2H14V6"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66666 9.33333L14 2"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

ExternalLinkIcon.displayName = 'ExternalLinkIcon';

export { LinkIcon, ExternalLinkIcon };
