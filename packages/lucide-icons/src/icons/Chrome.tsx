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
      <_Circle cx="12" cy="12" r="10" />
      <_Circle cx="12" cy="12" r="4" />
      <Line x1="21.17" y1="8" x2="12" y2="8" />
      <Line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <Line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </Svg>
  );
};
Icon.displayName = 'Chrome';
export const Chrome = React.memo(Icon);
