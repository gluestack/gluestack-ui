import React from 'react';
import { createIcon } from '@universa11y/icon';
import { Circle } from 'react-native-svg';
import Root from './Root';

export const Icon = createIcon({
  Root,
  viewBox: '0 0 36 36',
  // d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
  path: [
    <Circle cx="18" cy="18" r="17.5" fill="#06B6D4" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="13.5" fill="white" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="9.5" fill="#06B6D4" stroke="#0E7490" />,
    <Circle cx="18" cy="18" r="5.5" fill="white" stroke="#0E7490" />,
  ],
});

export { CheckIcon } from './Icons/Check';
export { InfoOutlineIcon, InfoIcon } from './Icons/Info';
export * from './Icons';
