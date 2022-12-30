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
      <Polyline points="17 11 21 7 17 3" />
      <Line x1="21" y1="7" x2="9" y2="7" />
      <Polyline points="7 21 3 17 7 13" />
      <Line x1="15" y1="17" x2="3" y2="17" />
    </Svg>
  );
};
Icon.displayName = 'ArrowLeftRight';
export const ArrowLeftRight = React.memo(Icon);
