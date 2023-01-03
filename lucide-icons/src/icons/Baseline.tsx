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
      <Path d="M4 20h16" />
      <Path d="m6 16 6-12 6 12" />
      <Path d="M8 12h8" />
    </Svg>
  );
};
Icon.displayName = 'Baseline';
export const Baseline = React.memo(Icon);
