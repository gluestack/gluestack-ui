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
      <Rect x="2" y="5" width="6" height="14" rx="2" />
      <Rect x="12" y="7" width="6" height="10" rx="2" />
      <Path d="M22 2v20" />
    </Svg>
  );
};
Icon.displayName = 'AlignHorizontalJustifyEnd';
export const AlignHorizontalJustifyEnd = React.memo(Icon);
