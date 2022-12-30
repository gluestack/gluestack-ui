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
      <Polygon points="12 2 19 21 12 17 5 21 12 2" />
    </Svg>
  );
};
Icon.displayName = 'Navigation2';
export const Navigation2 = React.memo(Icon);
