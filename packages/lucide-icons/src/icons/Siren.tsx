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
      <Path d="M7 12a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v6H7v-6Z" />
      <Path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2H5v-2Z" />
      <Path d="M21 12h1" />
      <Path d="M18.5 4.5 18 5" />
      <Path d="M2 12h1" />
      <Path d="M12 2v1" />
      <Path d="m4.929 4.929.707.707" />
      <Path d="M12 12v6" />
    </Svg>
  );
};
Icon.displayName = 'Siren';
export const Siren = React.memo(Icon);
