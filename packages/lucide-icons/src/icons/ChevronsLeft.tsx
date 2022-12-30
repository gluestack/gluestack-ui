import React from 'react';
import { Svg, Polyline } from 'react-native-svg';
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
      <Polyline points="11 17 6 12 11 7" />
      <Polyline points="18 17 13 12 18 7" />
    </Svg>
  );
};
Icon.displayName = 'ChevronsLeft';
export const ChevronsLeft = React.memo(Icon);
