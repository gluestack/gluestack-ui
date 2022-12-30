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
      <Path d="M14 11c5.333 0 5.333-8 0-8" />
      <Path d="M6 11h8" />
      <Path d="M6 15h8" />
      <Path d="M9 21V3" />
      <Path d="M9 3h5" />
    </Svg>
  );
};
Icon.displayName = 'RussianRuble';
export const RussianRuble = React.memo(Icon);
