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
      <Path d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43" />
      <Path d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'StarOff';
export const StarOff = React.memo(Icon);
