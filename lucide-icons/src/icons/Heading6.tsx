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
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <_Circle cx="19" cy="16" r="2" />
      <Path d="M20 10c-2 2-3 3.5-3 6" />
    </Svg>
  );
};
Icon.displayName = 'Heading6';
export const Heading6 = React.memo(Icon);
