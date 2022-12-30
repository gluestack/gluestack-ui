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
      <Path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
    </Svg>
  );
};
Icon.displayName = 'MousePointer2';
export const MousePointer2 = React.memo(Icon);
