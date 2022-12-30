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
      <Rect x="6" y="14" width="9" height="6" rx="2" />
      <Rect x="6" y="4" width="16" height="6" rx="2" />
      <Path d="M2 2v20" />
    </Svg>
  );
};
Icon.displayName = 'AlignStartVertical';
export const AlignStartVertical = React.memo(Icon);
