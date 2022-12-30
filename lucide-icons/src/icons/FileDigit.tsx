import React from 'react';
import { Svg, Path, Polyline, Rect } from 'react-native-svg';
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
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M10 12h2v6" />
      <Rect x="2" y="12" width="4" height="6" />
      <Path d="M10 18h4" />
    </Svg>
  );
};
Icon.displayName = 'FileDigit';
export const FileDigit = React.memo(Icon);
