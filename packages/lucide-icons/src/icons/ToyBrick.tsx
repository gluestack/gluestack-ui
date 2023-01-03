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
      <Rect x="3" y="8" width="18" height="12" rx="1" />
      <Path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" />
      <Path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" />
    </Svg>
  );
};
Icon.displayName = 'ToyBrick';
export const ToyBrick = React.memo(Icon);
