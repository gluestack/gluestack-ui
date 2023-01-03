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
      <Path d="M9 2v6" />
      <Path d="M15 2v6" />
      <Path d="M12 17v5" />
      <Path d="M5 8h14" />
      <Path d="M6 11V8h12v3a6 6 0 1 1-12 0v0Z" />
    </Svg>
  );
};
Icon.displayName = 'Plug2';
export const Plug2 = React.memo(Icon);
