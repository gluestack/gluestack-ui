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
      <Path d="M6 12h12" />
      <Path d="M6 20V4" />
      <Path d="M18 20V4" />
    </Svg>
  );
};
Icon.displayName = 'Heading';
export const Heading = React.memo(Icon);
