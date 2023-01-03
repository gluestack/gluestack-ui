import React from 'react';
import { Svg, Line, Path, Rect } from 'react-native-svg';
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
      <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <Line x1="16" y1="2" x2="16" y2="6" />
      <Line x1="8" y1="2" x2="8" y2="6" />
      <Line x1="3" y1="10" x2="21" y2="10" />
      <Path d="M17 14h-6" />
      <Path d="M13 18H7" />
      <Path d="M7 14h.01" />
      <Path d="M17 18h.01" />
    </Svg>
  );
};
Icon.displayName = 'CalendarRange';
export const CalendarRange = React.memo(Icon);
