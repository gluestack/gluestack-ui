import React from 'react';
import { Svg, Line, Polygon } from 'react-native-svg';
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
      <Polygon points="19 20 9 12 19 4 19 20" />
      <Line x1="5" y1="19" x2="5" y2="5" />
    </Svg>
  );
};
Icon.displayName = 'SkipBack';
export const SkipBack = React.memo(Icon);
