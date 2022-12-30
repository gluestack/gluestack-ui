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
      <Path d="M12 9a4 4 0 0 0-2 7.5" />
      <Path d="M12 3v2" />
      <Path d="m6.6 18.4-1.4 1.4" />
      <Path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
      <Path d="M4 13H2" />
      <Path d="M6.34 7.34 4.93 5.93" />
    </Svg>
  );
};
Icon.displayName = 'ThermometerSun';
export const ThermometerSun = React.memo(Icon);
