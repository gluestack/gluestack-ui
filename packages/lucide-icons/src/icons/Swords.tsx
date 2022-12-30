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
      <Polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
      <Line x1="5" y1="14" x2="9" y2="18" />
      <Line x1="7" y1="17" x2="4" y2="20" />
      <Line x1="3" y1="19" x2="5" y2="21" />
    </Svg>
  );
};
Icon.displayName = 'Swords';
export const Swords = React.memo(Icon);
