import React from 'react';
import { Svg, Circle as _Circle, Path, Rect } from 'react-native-svg';
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
      <Path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" />
      <Path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" />
      <Rect x="8" y="6" width="13" height="8" rx="1" />
      <_Circle cx="18" cy="20" r="2" />
      <_Circle cx="9" cy="20" r="2" />
    </Svg>
  );
};
Icon.displayName = 'BaggageClaim';
export const BaggageClaim = React.memo(Icon);
