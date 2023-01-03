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
      <Polyline points="13 5 19 5 19 11" />
      <Polyline points="11 19 5 19 5 13" />
      <Line x1="19" y1="5" x2="5" y2="19" />
    </Svg>
  );
};
Icon.displayName = 'MoveDiagonal';
export const MoveDiagonal = React.memo(Icon);
