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
      <Polyline points="8 18 12 22 16 18" />
      <Polyline points="8 6 12 2 16 6" />
      <Line x1="12" y1="2" x2="12" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'MoveVertical';
export const MoveVertical = React.memo(Icon);
