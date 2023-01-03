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
      <Path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" />
      <Path d="M7 2h11v4c0 2-2 2-2 4v1" />
      <Line x1="11" y1="6" x2="18" y2="6" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'FlashlightOff';
export const FlashlightOff = React.memo(Icon);
