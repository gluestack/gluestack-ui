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
      <Path d="M15 11h.01" />
      <Path d="M11 15h.01" />
      <Path d="M16 16h.01" />
      <Path d="m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z" />
      <Path d="M17 6c-6.29 1.47-9.43 5.13-11 11" />
    </Svg>
  );
};
Icon.displayName = 'Pizza';
export const Pizza = React.memo(Icon);
