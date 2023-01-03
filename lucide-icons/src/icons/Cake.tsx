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
      <Path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <Path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <Path d="M2 21h20" />
      <Path d="M7 8v2" />
      <Path d="M12 8v2" />
      <Path d="M17 8v2" />
      <Path d="M7 4h.01" />
      <Path d="M12 4h.01" />
      <Path d="M17 4h.01" />
    </Svg>
  );
};
Icon.displayName = 'Cake';
export const Cake = React.memo(Icon);
