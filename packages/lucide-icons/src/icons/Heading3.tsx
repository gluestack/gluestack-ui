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
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <Path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
      <Path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
    </Svg>
  );
};
Icon.displayName = 'Heading3';
export const Heading3 = React.memo(Icon);
