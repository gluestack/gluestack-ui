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
      <Path d="M17 10v4h4" />
      <Path d="M21 10v8" />
    </Svg>
  );
};
Icon.displayName = 'Heading4';
export const Heading4 = React.memo(Icon);
