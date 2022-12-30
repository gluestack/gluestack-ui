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
      <Polyline points="10 15 15 20 20 15" />
      <Path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </Svg>
  );
};
Icon.displayName = 'CornerRightDown';
export const CornerRightDown = React.memo(Icon);
