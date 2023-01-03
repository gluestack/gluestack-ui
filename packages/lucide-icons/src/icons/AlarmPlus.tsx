import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <Path d="M5 3 2 6" />
      <Path d="m22 6-3-3" />
      <Path d="m6 19-2 2" />
      <Path d="m18 19 2 2" />
      <Path d="M12 10v6" />
      <Path d="M9 13h6" />
    </Svg>
  );
};
Icon.displayName = 'AlarmPlus';
export const AlarmPlus = React.memo(Icon);
