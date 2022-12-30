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
      <Line x1="3" y1="6" x2="21" y2="6" />
      <Path d="M3 12h15a3 3 0 1 1 0 6h-4" />
      <Polyline points="16 16 14 18 16 20" />
      <Line x1="3" y1="18" x2="10" y2="18" />
    </Svg>
  );
};
Icon.displayName = 'WrapText';
export const WrapText = React.memo(Icon);
