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
      <Path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <Path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <Path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <Path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </Svg>
  );
};
Icon.displayName = 'Minimize';
export const Minimize = React.memo(Icon);
