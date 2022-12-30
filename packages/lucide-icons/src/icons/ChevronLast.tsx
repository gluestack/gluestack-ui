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
      <Polyline points="7 18 13 12 7 6" />
      <Path d="M17 6v12" />
    </Svg>
  );
};
Icon.displayName = 'ChevronLast';
export const ChevronLast = React.memo(Icon);
