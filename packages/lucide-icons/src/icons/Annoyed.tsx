import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M8 15h8" />
      <Path d="M8 9h2" />
      <Path d="M14 9h2" />
    </Svg>
  );
};
Icon.displayName = 'Annoyed';
export const Annoyed = React.memo(Icon);
