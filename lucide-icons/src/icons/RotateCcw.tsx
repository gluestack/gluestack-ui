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
      <Path d="M3 2v6h6" />
      <Path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
    </Svg>
  );
};
Icon.displayName = 'RotateCcw';
export const RotateCcw = React.memo(Icon);
