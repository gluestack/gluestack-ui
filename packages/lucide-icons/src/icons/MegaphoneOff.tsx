import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Path d="M9.26 9.26 3 11v3l14.14 3.14" />
      <Path d="M21 15.34V6l-7.31 2.03" />
      <Path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      <Line x1="2" x2="22" y1="2" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'MegaphoneOff';
export const MegaphoneOff = React.memo(Icon);
