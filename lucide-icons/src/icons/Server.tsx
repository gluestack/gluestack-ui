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
      <Rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <Rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <Line x1="6" y1="6" x2="6.01" y2="6" />
      <Line x1="6" y1="18" x2="6.01" y2="18" />
    </Svg>
  );
};
Icon.displayName = 'Server';
export const Server = React.memo(Icon);
