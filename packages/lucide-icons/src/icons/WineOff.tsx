import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Path d="M8 22h8" />
      <Path d="M7 10h3m7 0h-1.343" />
      <Path d="M12 15v7" />
      <Path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'WineOff';
export const WineOff = React.memo(Icon);
