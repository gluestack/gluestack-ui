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
      <Path d="M5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" />
      <Path d="M5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1" />
      <Path d="M6 6h.01" />
      <Path d="M6 18h.01" />
      <_Circle cx="12" cy="12" r="3" />
      <Path d="M12 8v1" />
      <Path d="M12 15v1" />
      <Path d="M16 12h-1" />
      <Path d="M9 12H8" />
      <Path d="m15 9-.88.88" />
      <Path d="M9.88 14.12 9 15" />
      <Path d="m15 15-.88-.88" />
      <Path d="M9.88 9.88 9 9" />
    </Svg>
  );
};
Icon.displayName = 'ServerCog';
export const ServerCog = React.memo(Icon);
