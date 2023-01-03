import React from 'react';
import { Svg, Line, Path, Rect } from 'react-native-svg';
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
      <Rect x="4" y="2" width="16" height="20" rx="2" />
      <Line x1="8" x2="16" y1="6" y2="6" />
      <Line x1="16" x2="16" y1="14" y2="18" />
      <Path d="M16 10h.01" />
      <Path d="M12 10h.01" />
      <Path d="M8 10h.01" />
      <Path d="M12 14h.01" />
      <Path d="M8 14h.01" />
      <Path d="M12 18h.01" />
      <Path d="M8 18h.01" />
    </Svg>
  );
};
Icon.displayName = 'Calculator';
export const Calculator = React.memo(Icon);
