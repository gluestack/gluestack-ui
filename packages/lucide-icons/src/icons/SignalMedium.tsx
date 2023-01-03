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
      <Path d="M2 20h.01" />
      <Path d="M7 20v-4" />
      <Path d="M12 20v-8" />
    </Svg>
  );
};
Icon.displayName = 'SignalMedium';
export const SignalMedium = React.memo(Icon);
