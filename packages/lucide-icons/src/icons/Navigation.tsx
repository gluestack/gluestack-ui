import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
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
      <Polygon points="3 11 22 2 13 21 11 13 3 11" />
    </Svg>
  );
};
Icon.displayName = 'Navigation';
export const Navigation = React.memo(Icon);
