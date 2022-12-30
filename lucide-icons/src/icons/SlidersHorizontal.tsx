import React from 'react';
import { Svg, Line } from 'react-native-svg';
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
      <Line x1="21" y1="4" x2="14" y2="4" />
      <Line x1="10" y1="4" x2="3" y2="4" />
      <Line x1="21" y1="12" x2="12" y2="12" />
      <Line x1="8" y1="12" x2="3" y2="12" />
      <Line x1="21" y1="20" x2="16" y2="20" />
      <Line x1="12" y1="20" x2="3" y2="20" />
      <Line x1="14" y1="2" x2="14" y2="6" />
      <Line x1="8" y1="10" x2="8" y2="14" />
      <Line x1="16" y1="18" x2="16" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'SlidersHorizontal';
export const SlidersHorizontal = React.memo(Icon);
