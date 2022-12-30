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
      <Rect x="4" y="2" width="6" height="16" rx="2" />
      <Rect x="14" y="9" width="6" height="9" rx="2" />
      <Path d="M22 22H2" />
    </Svg>
  );
};
Icon.displayName = 'AlignEndHorizontal';
export const AlignEndHorizontal = React.memo(Icon);
