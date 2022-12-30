import React from 'react';
import { Svg, Path, Polyline } from 'react-native-svg';
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
      <Path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <Path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
    </Svg>
  );
};
Icon.displayName = 'FileBadge';
export const FileBadge = React.memo(Icon);
