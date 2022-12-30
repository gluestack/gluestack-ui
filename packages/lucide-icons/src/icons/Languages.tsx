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
      <Path d="m5 8 6 6" />
      <Path d="m4 14 6-6 2-3" />
      <Path d="M2 5h12" />
      <Path d="M7 2h1" />
      <Path d="m22 22-5-10-5 10" />
      <Path d="M14 18h6" />
    </Svg>
  );
};
Icon.displayName = 'Languages';
export const Languages = React.memo(Icon);
