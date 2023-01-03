import React from 'react';
import { Svg, Rect } from 'react-native-svg';
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
      <Rect x="4" y="2" width="6" height="20" rx="2" />
      <Rect x="14" y="2" width="6" height="20" rx="2" />
    </Svg>
  );
};
Icon.displayName = 'StretchVertical';
export const StretchVertical = React.memo(Icon);
