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
      <Path d="M6 3h12" />
      <Path d="M6 8h12" />
      <Path d="m6 13 8.5 8" />
      <Path d="M6 13h3" />
      <Path d="M9 13c6.667 0 6.667-10 0-10" />
    </Svg>
  );
};
Icon.displayName = 'IndianRupee';
export const IndianRupee = React.memo(Icon);
