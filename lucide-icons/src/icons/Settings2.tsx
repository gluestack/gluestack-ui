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
      <Path d="M20 7h-9" />
      <Path d="M14 17H5" />
      <_Circle cx="17" cy="17" r="3" />
      <_Circle cx="7" cy="7" r="3" />
    </Svg>
  );
};
Icon.displayName = 'Settings2';
export const Settings2 = React.memo(Icon);
