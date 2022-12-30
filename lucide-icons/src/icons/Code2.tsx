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
      <Path d="m18 16 4-4-4-4" />
      <Path d="m6 8-4 4 4 4" />
      <Path d="m14.5 4-5 16" />
    </Svg>
  );
};
Icon.displayName = 'Code2';
export const Code2 = React.memo(Icon);
