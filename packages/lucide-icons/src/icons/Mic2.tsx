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
      <Path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
      <_Circle cx="17" cy="7" r="5" />
    </Svg>
  );
};
Icon.displayName = 'Mic2';
export const Mic2 = React.memo(Icon);
