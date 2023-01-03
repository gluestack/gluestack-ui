import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="M16 12H3" />
      <Path d="M16 18H3" />
      <Path d="M10 6H3" />
      <Path d="M21 18V8a2 2 0 0 0-2-2h-5" />
      <Path d="m16 8-2-2 2-2" />
    </Svg>
  );
};
Icon.displayName = 'ListStart';
export const ListStart = React.memo(Icon);
