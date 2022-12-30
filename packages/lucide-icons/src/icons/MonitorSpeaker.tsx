import React from 'react';
import { Svg, Circle as _Circle, Path, Rect } from 'react-native-svg';
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
      <Path d="M5.5 20H8" />
      <Path d="M17 9h.01" />
      <Rect x="12" y="4" width="10" height="16" rx="2" />
      <Path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
      <_Circle cx="17" cy="15" r="1" />
    </Svg>
  );
};
Icon.displayName = 'MonitorSpeaker';
export const MonitorSpeaker = React.memo(Icon);
