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
      <Polyline points="14 9 9 4 4 9" />
      <Path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </Svg>
  );
};
Icon.displayName = 'CornerLeftUp';
export const CornerLeftUp = React.memo(Icon);
