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
      <Polyline points="10 9 15 4 20 9" />
      <Path d="M4 20h7a4 4 0 0 0 4-4V4" />
    </Svg>
  );
};
Icon.displayName = 'CornerRightUp';
export const CornerRightUp = React.memo(Icon);
