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
      <Path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </Svg>
  );
};
Icon.displayName = 'Heading2';
export const Heading2 = React.memo(Icon);
