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
      <Path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" />
      <Path d="M10 19v-3.96 3.15" />
      <Path d="M7 19h5" />
      <Rect x="16" y="12" width="6" height="10" rx="2" />
    </Svg>
  );
};
Icon.displayName = 'MonitorSmartphone';
export const MonitorSmartphone = React.memo(Icon);
