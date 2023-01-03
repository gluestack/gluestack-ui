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
      <Path d="M2 12h20" />
      <Path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" />
      <Path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" />
      <Path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" />
      <Path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" />
    </Svg>
  );
};
Icon.displayName = 'AlignCenterHorizontal';
export const AlignCenterHorizontal = React.memo(Icon);
