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
      <Rect x="4" y="5" width="6" height="14" rx="2" />
      <Rect x="14" y="7" width="6" height="10" rx="2" />
      <Path d="M10 2v20" />
      <Path d="M20 2v20" />
    </Svg>
  );
};
Icon.displayName = 'AlignHorizontalDistributeEnd';
export const AlignHorizontalDistributeEnd = React.memo(Icon);
