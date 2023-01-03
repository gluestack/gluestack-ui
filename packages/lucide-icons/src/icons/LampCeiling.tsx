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
      <Path d="M12 2v5" />
      <Path d="M6 7h12l4 9H2l4-9Z" />
      <Path d="M9.17 16a3 3 0 1 0 5.66 0" />
    </Svg>
  );
};
Icon.displayName = 'LampCeiling';
export const LampCeiling = React.memo(Icon);
