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
      <_Circle cx="12" cy="12" r="2" />
      <Path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
      <Path d="M7.76 16.24a6 6 0 0 1-1.3-1.95 6 6 0 0 1 0-4.59 6 6 0 0 1 1.3-1.95" />
      <Path d="M16.24 7.76a6 6 0 0 1 1.3 2 6 6 0 0 1 0 4.59 6 6 0 0 1-1.3 1.95" />
      <Path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </Svg>
  );
};
Icon.displayName = 'Radio';
export const Radio = React.memo(Icon);
