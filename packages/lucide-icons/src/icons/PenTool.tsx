import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <Path d="m12 19 7-7 3 3-7 7-3-3z" />
      <Path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <Path d="m2 2 7.586 7.586" />
      <_Circle cx="11" cy="11" r="2" />
    </Svg>
  );
};
Icon.displayName = 'PenTool';
export const PenTool = React.memo(Icon);
