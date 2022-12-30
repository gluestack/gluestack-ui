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
      <Path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <Path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <Path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <Path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </Svg>
  );
};
Icon.displayName = 'Expand';
export const Expand = React.memo(Icon);
