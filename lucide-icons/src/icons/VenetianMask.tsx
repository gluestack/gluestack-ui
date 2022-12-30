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
      <Path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z" />
      <Path d="M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z" />
      <Path d="M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z" />
    </Svg>
  );
};
Icon.displayName = 'VenetianMask';
export const VenetianMask = React.memo(Icon);
