import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Rect x="2" y="4" width="20" height="15" rx="2" />
      <Rect x="6" y="8" width="8" height="7" rx="1" />
      <Path d="M18 8v7" />
      <Path d="M6 19v2" />
      <Path d="M18 19v2" />
    </Svg>
  );
};
Icon.displayName = 'Microwave';
export const Microwave = React.memo(Icon);
