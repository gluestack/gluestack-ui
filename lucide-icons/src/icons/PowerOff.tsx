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
      <Path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
      <Path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
      <Path d="M12 2v4" />
      <Path d="m2 2 20 20" />
    </Svg>
  );
};
Icon.displayName = 'PowerOff';
export const PowerOff = React.memo(Icon);
