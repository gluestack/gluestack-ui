import React from 'react';
import { Svg, Line, Polyline } from 'react-native-svg';
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
      <Polyline points="4 17 10 11 4 5" />
      <Line x1="12" y1="19" x2="20" y2="19" />
    </Svg>
  );
};
Icon.displayName = 'Terminal';
export const Terminal = React.memo(Icon);
