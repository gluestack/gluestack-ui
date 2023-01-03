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
      <Rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <Polyline points="17 2 12 7 7 2" />
    </Svg>
  );
};
Icon.displayName = 'Tv';
export const Tv = React.memo(Icon);
