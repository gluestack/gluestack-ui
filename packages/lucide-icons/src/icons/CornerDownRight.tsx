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
      <Polyline points="15 10 20 15 15 20" />
      <Path d="M4 4v7a4 4 0 0 0 4 4h12" />
    </Svg>
  );
};
Icon.displayName = 'CornerDownRight';
export const CornerDownRight = React.memo(Icon);
