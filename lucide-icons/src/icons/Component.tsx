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
      <Path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <Path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <Path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <Path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </Svg>
  );
};
Icon.displayName = 'Component';
export const Component = React.memo(Icon);
