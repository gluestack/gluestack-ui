import React from 'react';
import { Svg, Path, Polyline } from 'react-native-svg';
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
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="m7 10-3 2H2v4h2l3 2v-8Z" />
      <Path d="M11 11c.64.8 1 1.87 1 3s-.36 2.2-1 3" />
    </Svg>
  );
};
Icon.displayName = 'FileVolume';
export const FileVolume = React.memo(Icon);
