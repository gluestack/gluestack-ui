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
      <Path d="M21 3 9 15" />
      <Path d="M12 3H3v18h18v-9" />
      <Path d="M16 3h5v5" />
      <Path d="M14 15H9v-5" />
    </Svg>
  );
};
Icon.displayName = 'Scaling';
export const Scaling = React.memo(Icon);
