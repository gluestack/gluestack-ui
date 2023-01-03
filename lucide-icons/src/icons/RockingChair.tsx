import React from 'react';
import { Svg, Line, Path, Polyline } from 'react-native-svg';
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
      <Polyline points="3.5 2 6.5 12.5 18 12.5" />
      <Line x1="9.5" y1="12.5" x2="5.5" y2="20" />
      <Line x1="15" y1="12.5" x2="18.5" y2="20" />
      <Path d="M2.75 18a13 13 0 0 0 18.5 0" />
    </Svg>
  );
};
Icon.displayName = 'RockingChair';
export const RockingChair = React.memo(Icon);
