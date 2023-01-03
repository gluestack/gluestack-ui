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
      <Path d="m22 8-6 4 6 4V8Z" />
      <Rect x="2" y="6" width="14" height="12" rx="2" ry="2" />
    </Svg>
  );
};
Icon.displayName = 'Video';
export const Video = React.memo(Icon);
