import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Path d="M6 20h4" />
      <Path d="M14 10h4" />
      <Path d="M6 14h2v6" />
      <Path d="M14 4h2v6" />
      <Rect x="6" y="4" width="4" height="6" />
      <Rect x="14" y="14" width="4" height="6" />
    </Svg>
  );
};
Icon.displayName = 'Binary';
export const Binary = React.memo(Icon);
