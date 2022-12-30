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
      <Path d="M18 7c0-5.333-8-5.333-8 0" />
      <Path d="M10 7v14" />
      <Path d="M6 21h12" />
      <Path d="M6 13h10" />
    </Svg>
  );
};
Icon.displayName = 'PoundSterling';
export const PoundSterling = React.memo(Icon);
