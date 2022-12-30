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
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="3" y1="9" x2="21" y2="9" />
      <Line x1="9" y1="21" x2="9" y2="9" />
    </Svg>
  );
};
Icon.displayName = 'Layout';
export const Layout = React.memo(Icon);
