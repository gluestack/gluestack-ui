import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <Path d="M15 21v-4a2 2 0 0 1 2-2h4" />
      <Path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3" />
      <Path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4" />
      <_Circle cx="12" cy="12" r="10" />
    </Svg>
  );
};
Icon.displayName = 'Globe2';
export const Globe2 = React.memo(Icon);
