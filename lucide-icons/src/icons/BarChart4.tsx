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
      <Path d="M3 3v18h18" />
      <Path d="M13 17V9" />
      <Path d="M18 17V5" />
      <Path d="M8 17v-3" />
    </Svg>
  );
};
Icon.displayName = 'BarChart4';
export const BarChart4 = React.memo(Icon);
