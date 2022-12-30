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
      <Path d="m9 7-5 5 5 5" />
      <Path d="m15 7 5 5-5 5" />
    </Svg>
  );
};
Icon.displayName = 'ChevronsLeftRight';
export const ChevronsLeftRight = React.memo(Icon);
