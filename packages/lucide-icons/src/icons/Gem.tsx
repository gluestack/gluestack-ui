import React from 'react';
import { Svg, Path, Polygon } from 'react-native-svg';
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
      <Polygon points="6 3 18 3 22 9 12 22 2 9" />
      <Path d="m12 22 4-13-3-6" />
      <Path d="M12 22 8 9l3-6" />
      <Path d="M2 9h20" />
    </Svg>
  );
};
Icon.displayName = 'Gem';
export const Gem = React.memo(Icon);
