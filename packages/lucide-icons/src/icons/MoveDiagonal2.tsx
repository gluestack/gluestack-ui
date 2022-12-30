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
      <Polyline points="5 11 5 5 11 5" />
      <Polyline points="19 13 19 19 13 19" />
      <Line x1="5" y1="5" x2="19" y2="19" />
    </Svg>
  );
};
Icon.displayName = 'MoveDiagonal2';
export const MoveDiagonal2 = React.memo(Icon);
