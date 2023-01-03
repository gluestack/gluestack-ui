import React from 'react';
import { Svg, Polyline, Rect } from 'react-native-svg';
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
      <Polyline points="11 3 11 11 14 8 17 11 17 3" />
    </Svg>
  );
};
Icon.displayName = 'Album';
export const Album = React.memo(Icon);
