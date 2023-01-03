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
      <Path d="M9 2h6l3 7H6l3-7Z" />
      <Path d="M12 9v13" />
      <Path d="M9 22h6" />
    </Svg>
  );
};
Icon.displayName = 'LampFloor';
export const LampFloor = React.memo(Icon);
