import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <Path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <_Circle cx="10" cy="16" r="2" />
      <Path d="m16 10-4.5 4.5" />
      <Path d="m15 11 1 1" />
    </Svg>
  );
};
Icon.displayName = 'FileKey';
export const FileKey = React.memo(Icon);
