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
      <Path d="M4 11a9 9 0 0 1 9 9" />
      <Path d="M4 4a16 16 0 0 1 16 16" />
      <_Circle cx="5" cy="19" r="1" />
    </Svg>
  );
};
Icon.displayName = 'Rss';
export const Rss = React.memo(Icon);
