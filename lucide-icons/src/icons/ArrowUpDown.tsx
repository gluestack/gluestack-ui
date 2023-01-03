import React from 'react';
import { Svg, Line, Polyline } from 'react-native-svg';
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
      <Polyline points="11 17 7 21 3 17" />
      <Line x1="7" y1="21" x2="7" y2="9" />
      <Polyline points="21 7 17 3 13 7" />
      <Line x1="17" y1="15" x2="17" y2="3" />
    </Svg>
  );
};
Icon.displayName = 'ArrowUpDown';
export const ArrowUpDown = React.memo(Icon);
