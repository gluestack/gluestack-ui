import React from 'react';
import { Svg, Line, Rect } from 'react-native-svg';
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
      <Rect x="3" y="14" width="7" height="7" />
      <Rect x="3" y="3" width="7" height="7" />
      <Line x1="14" y1="4" x2="21" y2="4" />
      <Line x1="14" y1="9" x2="21" y2="9" />
      <Line x1="14" y1="15" x2="21" y2="15" />
      <Line x1="14" y1="20" x2="21" y2="20" />
    </Svg>
  );
};
Icon.displayName = 'LayoutList';
export const LayoutList = React.memo(Icon);
