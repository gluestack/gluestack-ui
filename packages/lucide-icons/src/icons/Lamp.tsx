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
      <Path d="M8 2h8l4 10H4L8 2Z" />
      <Path d="M12 12v6" />
      <Path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
    </Svg>
  );
};
Icon.displayName = 'Lamp';
export const Lamp = React.memo(Icon);
