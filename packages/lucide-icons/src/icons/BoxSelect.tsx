import React from 'react';
import { Svg, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M5 3a2 2 0 0 0-2 2" />
      <Path d="M19 3a2 2 0 0 1 2 2" />
      <Path d="M21 19a2 2 0 0 1-2 2" />
      <Path d="M5 21a2 2 0 0 1-2-2" />
      <Path d="M9 3h1" />
      <Path d="M9 21h1" />
      <Path d="M14 3h1" />
      <Path d="M14 21h1" />
      <Path d="M3 9v1" />
      <Path d="M21 9v1" />
      <Path d="M3 14v1" />
      <Path d="M21 14v1" />
    </Svg>
  );
};
Icon.displayName = 'BoxSelect';
export const BoxSelect = React.memo(Icon);
