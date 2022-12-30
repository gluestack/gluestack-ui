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
      <Polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <Line x1="9" y1="3" x2="9" y2="18" />
      <Line x1="15" y1="6" x2="15" y2="21" />
    </Svg>
  );
};
Icon.displayName = 'Map';
export const Map = React.memo(Icon);
