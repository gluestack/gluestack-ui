import React from 'react';
import { Svg, Circle as _Circle, Line } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="8" />
      <Line x1="3" y1="3" x2="6" y2="6" />
      <Line x1="21" y1="3" x2="18" y2="6" />
      <Line x1="3" y1="21" x2="6" y2="18" />
      <Line x1="21" y1="21" x2="18" y2="18" />
    </Svg>
  );
};
Icon.displayName = 'Currency';
export const Currency = React.memo(Icon);
