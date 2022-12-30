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
      <Path d="M11 5h10" />
      <Path d="M11 9h7" />
      <Path d="M11 13h4" />
      <Path d="m3 17 3 3 3-3" />
      <Path d="M6 18V4" />
    </Svg>
  );
};
Icon.displayName = 'SortDesc';
export const SortDesc = React.memo(Icon);
