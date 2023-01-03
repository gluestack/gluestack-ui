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
      <Path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
      <Line x1="12" y1="2" x2="12" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'Power';
export const Power = React.memo(Icon);
