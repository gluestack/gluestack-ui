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
      <Rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      <Line x1="2" y1="20" x2="22" y2="20" />
    </Svg>
  );
};
Icon.displayName = 'Laptop2';
export const Laptop2 = React.memo(Icon);
