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
      <Path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M3 15h6" />
      <Path d="M6 12v6" />
    </Svg>
  );
};
Icon.displayName = 'FilePlus2';
export const FilePlus2 = React.memo(Icon);
