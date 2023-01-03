import React from 'react';
import { Svg, Line, Rect } from 'react-native-svg';
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
      <Rect x="2" y="7" width="16" height="10" rx="2" ry="2" />
      <Line x1="22" x2="22" y1="11" y2="13" />
      <Line x1="6" x2="6" y1="11" y2="13" />
      <Line x1="10" x2="10" y1="11" y2="13" />
    </Svg>
  );
};
Icon.displayName = 'BatteryMedium';
export const BatteryMedium = React.memo(Icon);
