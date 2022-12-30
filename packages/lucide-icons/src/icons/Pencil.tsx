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
      <Line x1="18" y1="2" x2="22" y2="6" />
      <Path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z" />
    </Svg>
  );
};
Icon.displayName = 'Pencil';
export const Pencil = React.memo(Icon);
