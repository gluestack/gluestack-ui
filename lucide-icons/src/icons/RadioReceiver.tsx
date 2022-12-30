import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Path d="M5 16v2" />
      <Path d="M19 16v2" />
      <Rect x="2" y="8" width="20" height="8" rx="2" />
      <Path d="M18 12h0" />
    </Svg>
  );
};
Icon.displayName = 'RadioReceiver';
export const RadioReceiver = React.memo(Icon);
