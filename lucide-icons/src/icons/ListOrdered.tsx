import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Line x1="10" y1="6" x2="21" y2="6" />
      <Line x1="10" y1="12" x2="21" y2="12" />
      <Line x1="10" y1="18" x2="21" y2="18" />
      <Path d="M4 6h1v4" />
      <Path d="M4 10h2" />
      <Path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </Svg>
  );
};
Icon.displayName = 'ListOrdered';
export const ListOrdered = React.memo(Icon);
