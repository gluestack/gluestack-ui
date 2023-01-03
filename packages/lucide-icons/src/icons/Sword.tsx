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
      <Polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
      <Line x1="13" y1="19" x2="19" y2="13" />
      <Line x1="16" y1="16" x2="20" y2="20" />
      <Line x1="19" y1="21" x2="21" y2="19" />
    </Svg>
  );
};
Icon.displayName = 'Sword';
export const Sword = React.memo(Icon);
