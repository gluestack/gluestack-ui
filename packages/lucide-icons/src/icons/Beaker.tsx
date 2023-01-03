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
      <Path d="M4.5 3h15" />
      <Path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <Path d="M6 14h12" />
    </Svg>
  );
};
Icon.displayName = 'Beaker';
export const Beaker = React.memo(Icon);
