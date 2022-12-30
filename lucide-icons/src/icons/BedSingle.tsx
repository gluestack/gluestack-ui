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
      <Path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
      <Path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <Path d="M3 18h18" />
    </Svg>
  );
};
Icon.displayName = 'BedSingle';
export const BedSingle = React.memo(Icon);
