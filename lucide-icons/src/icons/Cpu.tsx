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
      <Rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
      <Rect x="9" y="9" width="6" height="6" />
      <Line x1="9" y1="2" x2="9" y2="4" />
      <Line x1="15" y1="2" x2="15" y2="4" />
      <Line x1="9" y1="21" x2="9" y2="22" />
      <Line x1="15" y1="20" x2="15" y2="22" />
      <Line x1="20" y1="9" x2="22" y2="9" />
      <Line x1="20" y1="14" x2="22" y2="14" />
      <Line x1="2" y1="9" x2="4" y2="9" />
      <Line x1="2" y1="14" x2="4" y2="14" />
    </Svg>
  );
};
Icon.displayName = 'Cpu';
export const Cpu = React.memo(Icon);
