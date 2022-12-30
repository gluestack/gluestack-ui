import React from 'react';
import { Svg, Circle as _Circle, Rect } from 'react-native-svg';
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
      <Rect x="1" y="5" width="22" height="14" rx="7" ry="7" />
      <_Circle cx="8" cy="12" r="3" />
    </Svg>
  );
};
Icon.displayName = 'ToggleLeft';
export const ToggleLeft = React.memo(Icon);
