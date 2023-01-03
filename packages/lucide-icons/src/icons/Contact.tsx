import React from 'react';
import { Svg, Circle as _Circle, Line, Path, Rect } from 'react-native-svg';
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
      <Path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <Rect x="3" y="4" width="18" height="18" rx="2" />
      <_Circle cx="12" cy="10" r="2" />
      <Line x1="8" y1="2" x2="8" y2="4" />
      <Line x1="16" y1="2" x2="16" y2="4" />
    </Svg>
  );
};
Icon.displayName = 'Contact';
export const Contact = React.memo(Icon);
