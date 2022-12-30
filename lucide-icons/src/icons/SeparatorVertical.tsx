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
      <Line x1="12" y1="3" x2="12" y2="21" />
      <Polyline points="8 8 4 12 8 16" />
      <Polyline points="16 16 20 12 16 8" />
    </Svg>
  );
};
Icon.displayName = 'SeparatorVertical';
export const SeparatorVertical = React.memo(Icon);
