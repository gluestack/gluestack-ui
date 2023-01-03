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
      <Path d="M13 4v16" />
      <Path d="M17 4v16" />
      <Path d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </Svg>
  );
};
Icon.displayName = 'Pilcrow';
export const Pilcrow = React.memo(Icon);
