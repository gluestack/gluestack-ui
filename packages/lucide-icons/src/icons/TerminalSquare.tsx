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
      <Path d="m7 11 2-2-2-2" />
      <Path d="M11 13h4" />
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </Svg>
  );
};
Icon.displayName = 'TerminalSquare';
export const TerminalSquare = React.memo(Icon);
