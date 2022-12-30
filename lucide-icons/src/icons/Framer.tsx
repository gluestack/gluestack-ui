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
      <Path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
    </Svg>
  );
};
Icon.displayName = 'Framer';
export const Framer = React.memo(Icon);
