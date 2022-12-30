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
      <Path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <Path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <Path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <Path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </Svg>
  );
};
Icon.displayName = 'Maximize';
export const Maximize = React.memo(Icon);
