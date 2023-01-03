import React from 'react';
import { Svg, Line, Polygon, Polyline } from 'react-native-svg';
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
      <Polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <Line x1="12" y1="22" x2="12" y2="15.5" />
      <Polyline points="22 8.5 12 15.5 2 8.5" />
      <Polyline points="2 15.5 12 8.5 22 15.5" />
      <Line x1="12" y1="2" x2="12" y2="8.5" />
    </Svg>
  );
};
Icon.displayName = 'Codepen';
export const Codepen = React.memo(Icon);
