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
      <Line x1="19" y1="5" x2="5" y2="19" />
      <_Circle cx="6.5" cy="6.5" r="2.5" />
      <_Circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  );
};
Icon.displayName = 'Percent';
export const Percent = React.memo(Icon);
