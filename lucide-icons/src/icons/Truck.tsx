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
      <Path d="M10 17h4V5H2v12h3" />
      <Path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <Path d="M14 17h1" />
      <_Circle cx="7.5" cy="17.5" r="2.5" />
      <_Circle cx="17.5" cy="17.5" r="2.5" />
    </Svg>
  );
};
Icon.displayName = 'Truck';
export const Truck = React.memo(Icon);
