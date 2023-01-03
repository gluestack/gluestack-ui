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
      <Path d="m3 11 18-5v12L3 14v-3z" />
      <Path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </Svg>
  );
};
Icon.displayName = 'Megaphone';
export const Megaphone = React.memo(Icon);
