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
      <Line x1="5" y1="12" x2="19" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'Minus';
export const Minus = React.memo(Icon);
