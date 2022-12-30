import React from 'react';
import { Svg, Rect } from 'react-native-svg';
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
      <Rect x="3" y="3" width="7" height="9" />
      <Rect x="14" y="3" width="7" height="5" />
      <Rect x="14" y="12" width="7" height="9" />
      <Rect x="3" y="16" width="7" height="5" />
    </Svg>
  );
};
Icon.displayName = 'LayoutDashboard';
export const LayoutDashboard = React.memo(Icon);
