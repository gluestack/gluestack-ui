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
      <Path d="M7 16h8" />
      <Path d="M7 11h12" />
      <Path d="M7 6h3" />
    </Svg>
  );
};
Icon.displayName = 'BarChartHorizontal';
export const BarChartHorizontal = React.memo(Icon);
