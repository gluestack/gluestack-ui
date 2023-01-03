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
      <Path d="M3 2v6h6" />
      <Path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
      <Path d="M21 22v-6h-6" />
      <Path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
    </Svg>
  );
};
Icon.displayName = 'RefreshCcw';
export const RefreshCcw = React.memo(Icon);
