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
      <Line x1="3" y1="22" x2="21" y2="22" />
      <Line x1="6" y1="18" x2="6" y2="11" />
      <Line x1="10" y1="18" x2="10" y2="11" />
      <Line x1="14" y1="18" x2="14" y2="11" />
      <Line x1="18" y1="18" x2="18" y2="11" />
      <Polygon points="12 2 20 7 4 7" />
    </Svg>
  );
};
Icon.displayName = 'Landmark';
export const Landmark = React.memo(Icon);
