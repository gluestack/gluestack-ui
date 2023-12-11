import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path } from 'react-native-svg';

export const MoonIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M12 3C10.8134 4.19491 10.1488 5.81141 10.1518 7.49539C10.1547 9.17936 10.825 10.7935 12.0157 11.9843C13.2065 13.175 14.8206 13.8453 16.5046 13.8482C18.1886 13.8512 19.8051 13.1866 21 12C21 13.78 20.4722 15.5201 19.4832 17.0001C18.4943 18.4802 17.0887 19.6337 15.4442 20.3149C13.7996 20.9961 11.99 21.1743 10.2442 20.8271C8.49836 20.4798 6.89472 19.6226 5.63604 18.364C4.37737 17.1053 3.5202 15.5016 3.17294 13.7558C2.82567 12.01 3.0039 10.2004 3.68509 8.55585C4.36628 6.91131 5.51983 5.50571 6.99987 4.51677C8.47991 3.52784 10.22 3 12 3V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
