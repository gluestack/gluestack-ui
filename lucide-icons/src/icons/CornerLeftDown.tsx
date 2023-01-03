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
      <Polyline points="14 15 9 20 4 15" />
      <Path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </Svg>
  );
};
Icon.displayName = 'CornerLeftDown';
export const CornerLeftDown = React.memo(Icon);
