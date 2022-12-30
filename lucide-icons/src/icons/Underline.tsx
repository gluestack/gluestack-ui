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
      <Path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <Line x1="4" y1="20" x2="20" y2="20" />
    </Svg>
  );
};
Icon.displayName = 'Underline';
export const Underline = React.memo(Icon);
