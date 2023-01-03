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
      <Rect x="3" y="11" width="18" height="10" rx="2" />
      <_Circle cx="12" cy="5" r="2" />
      <Path d="M12 7v4" />
      <Line x1="8" y1="16" x2="8" y2="16" />
      <Line x1="16" y1="16" x2="16" y2="16" />
    </Svg>
  );
};
Icon.displayName = 'Bot';
export const Bot = React.memo(Icon);
