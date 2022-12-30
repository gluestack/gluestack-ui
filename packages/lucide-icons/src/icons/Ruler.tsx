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
      <Path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z" />
      <Path d="m7.5 10.5 2 2" />
      <Path d="m10.5 7.5 2 2" />
      <Path d="m13.5 4.5 2 2" />
      <Path d="m4.5 13.5 2 2" />
    </Svg>
  );
};
Icon.displayName = 'Ruler';
export const Ruler = React.memo(Icon);
