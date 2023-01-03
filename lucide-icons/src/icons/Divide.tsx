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
      <_Circle cx="12" cy="6" r="1" />
      <Line x1="5" y1="12" x2="19" y2="12" />
      <_Circle cx="12" cy="18" r="1" />
    </Svg>
  );
};
Icon.displayName = 'Divide';
export const Divide = React.memo(Icon);
