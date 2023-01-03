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
      <Path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <Path d="m9.2 22 3-7" />
      <Path d="m9 13-3 7" />
      <Path d="m17 13-3 7" />
    </Svg>
  );
};
Icon.displayName = 'CloudRainWind';
export const CloudRainWind = React.memo(Icon);
