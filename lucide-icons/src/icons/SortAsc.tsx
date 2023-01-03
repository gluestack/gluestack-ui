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
      <Path d="M11 11h4" />
      <Path d="M11 15h7" />
      <Path d="M11 19h10" />
      <Path d="M9 7 6 4 3 7" />
      <Path d="M6 6v14" />
    </Svg>
  );
};
Icon.displayName = 'SortAsc';
export const SortAsc = React.memo(Icon);
