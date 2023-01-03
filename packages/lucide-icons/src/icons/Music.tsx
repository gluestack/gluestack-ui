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
      <Path d="M9 18V5l12-2v13" />
      <_Circle cx="6" cy="18" r="3" />
      <_Circle cx="18" cy="16" r="3" />
    </Svg>
  );
};
Icon.displayName = 'Music';
export const Music = React.memo(Icon);
