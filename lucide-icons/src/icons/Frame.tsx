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
      <Line x1="22" y1="6" x2="2" y2="6" />
      <Line x1="22" y1="18" x2="2" y2="18" />
      <Line x1="6" y1="2" x2="6" y2="22" />
      <Line x1="18" y1="2" x2="18" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'Frame';
export const Frame = React.memo(Icon);
