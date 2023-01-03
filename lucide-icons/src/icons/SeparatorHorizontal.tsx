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
      <Line x1="3" y1="12" x2="21" y2="12" />
      <Polyline points="8 8 12 4 16 8" />
      <Polyline points="16 16 12 20 8 16" />
    </Svg>
  );
};
Icon.displayName = 'SeparatorHorizontal';
export const SeparatorHorizontal = React.memo(Icon);
