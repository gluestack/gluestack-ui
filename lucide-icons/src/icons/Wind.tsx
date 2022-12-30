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
      <Path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <Path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <Path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </Svg>
  );
};
Icon.displayName = 'Wind';
export const Wind = React.memo(Icon);
