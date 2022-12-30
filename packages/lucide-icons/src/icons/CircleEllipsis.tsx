import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M17 12h.01" />
      <Path d="M12 12h.01" />
      <Path d="M7 12h.01" />
    </Svg>
  );
};
Icon.displayName = 'CircleEllipsis';
export const CircleEllipsis = React.memo(Icon);
