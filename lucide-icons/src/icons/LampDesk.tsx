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
      <Path d="m14 5-3 3 2 7 8-8-7-2Z" />
      <Path d="m14 5-3 3-3-3 3-3 3 3Z" />
      <Path d="M9.5 6.5 4 12l3 6" />
      <Path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
    </Svg>
  );
};
Icon.displayName = 'LampDesk';
export const LampDesk = React.memo(Icon);
