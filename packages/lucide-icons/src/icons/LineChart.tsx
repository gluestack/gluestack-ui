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
      <Path d="m19 9-5 5-4-4-3 3" />
    </Svg>
  );
};
Icon.displayName = 'LineChart';
export const LineChart = React.memo(Icon);
