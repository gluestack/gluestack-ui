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
      <Path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <Path d="m13 13 6 6" />
    </Svg>
  );
};
Icon.displayName = 'MousePointer';
export const MousePointer = React.memo(Icon);
