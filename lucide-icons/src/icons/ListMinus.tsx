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
      <Path d="M11 12H3" />
      <Path d="M16 6H3" />
      <Path d="M16 18H3" />
      <Path d="M21 12h-6" />
    </Svg>
  );
};
Icon.displayName = 'ListMinus';
export const ListMinus = React.memo(Icon);
