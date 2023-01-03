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
      <Path d="M5 7v12h12" />
      <Path d="m5 19 6-6" />
      <Rect x="3" y="3" width="4" height="4" rx="1" />
      <Rect x="17" y="17" width="4" height="4" rx="1" />
    </Svg>
  );
};
Icon.displayName = 'Scale3d';
export const Scale3d = React.memo(Icon);
