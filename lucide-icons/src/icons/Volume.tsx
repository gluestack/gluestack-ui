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
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </Svg>
  );
};
Icon.displayName = 'Volume';
export const Volume = React.memo(Icon);
