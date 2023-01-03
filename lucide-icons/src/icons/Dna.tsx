import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="M2 15c6.667-6 13.333 0 20-6" />
      <Path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
      <Path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
      <Path d="m17 6-2.5-2.5" />
      <Path d="m14 8-1-1" />
      <Path d="m7 18 2.5 2.5" />
      <Path d="m3.5 14.5.5.5" />
      <Path d="m20 9 .5.5" />
      <Path d="m6.5 12.5 1 1" />
      <Path d="m16.5 10.5 1 1" />
      <Path d="m10 16 1.5 1.5" />
    </Svg>
  );
};
Icon.displayName = 'Dna';
export const Dna = React.memo(Icon);
