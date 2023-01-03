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
      <Rect x="5" y="14" width="14" height="6" rx="2" />
      <Rect x="7" y="4" width="10" height="6" rx="2" />
      <Path d="M22 7h-5" />
      <Path d="M7 7H1" />
      <Path d="M22 17h-3" />
      <Path d="M5 17H2" />
    </Svg>
  );
};
Icon.displayName = 'AlignVerticalDistributeCenter';
export const AlignVerticalDistributeCenter = React.memo(Icon);
