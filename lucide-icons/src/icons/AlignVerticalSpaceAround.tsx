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
      <Rect x="7" y="9" width="10" height="6" rx="2" />
      <Path d="M22 20H2" />
      <Path d="M22 4H2" />
    </Svg>
  );
};
Icon.displayName = 'AlignVerticalSpaceAround';
export const AlignVerticalSpaceAround = React.memo(Icon);
