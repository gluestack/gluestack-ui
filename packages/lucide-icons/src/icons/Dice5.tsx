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
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Path d="M16 8h.01" />
      <Path d="M8 8h.01" />
      <Path d="M8 16h.01" />
      <Path d="M16 16h.01" />
      <Path d="M12 12h.01" />
    </Svg>
  );
};
Icon.displayName = 'Dice5';
export const Dice5 = React.memo(Icon);
