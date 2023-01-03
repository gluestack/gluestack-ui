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
      <Polyline points="3 8 7 12 3 16" />
      <Line x1="21" y1="12" x2="11" y2="12" />
      <Line x1="21" y1="6" x2="11" y2="6" />
      <Line x1="21" y1="18" x2="11" y2="18" />
    </Svg>
  );
};
Icon.displayName = 'Indent';
export const Indent = React.memo(Icon);
