import React from 'react';
import { Svg, Line, Polygon } from 'react-native-svg';
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
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <Line x1="22" y1="9" x2="16" y2="15" />
      <Line x1="16" y1="9" x2="22" y2="15" />
    </Svg>
  );
};
Icon.displayName = 'VolumeX';
export const VolumeX = React.memo(Icon);
