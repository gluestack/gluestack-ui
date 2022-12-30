import React from 'react';
import { Svg, Circle as _Circle, Path, Polyline } from 'react-native-svg';
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
      <Path d="M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4" />
      <Polyline points="14 2 14 8 20 8" />
      <_Circle cx="4" cy="16" r="2" />
      <Path d="m10 10-4.5 4.5" />
      <Path d="m9 11 1 1" />
    </Svg>
  );
};
Icon.displayName = 'FileKey2';
export const FileKey2 = React.memo(Icon);
