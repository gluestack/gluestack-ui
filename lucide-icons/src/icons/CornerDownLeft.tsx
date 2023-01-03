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
      <Polyline points="9 10 4 15 9 20" />
      <Path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </Svg>
  );
};
Icon.displayName = 'CornerDownLeft';
export const CornerDownLeft = React.memo(Icon);
