import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Path d="m2 8 2 2-2 2 2 2-2 2" />
      <Path d="m22 8-2 2 2 2-2 2 2 2" />
      <Rect x="8" y="5" width="8" height="14" rx="1" />
    </Svg>
  );
};
Icon.displayName = 'Vibrate';
export const Vibrate = React.memo(Icon);
