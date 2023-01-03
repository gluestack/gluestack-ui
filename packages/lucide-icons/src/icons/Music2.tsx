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
      <_Circle cx="8" cy="18" r="4" />
      <Path d="M12 18V2l7 4" />
    </Svg>
  );
};
Icon.displayName = 'Music2';
export const Music2 = React.memo(Icon);
