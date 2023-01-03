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
      <Polyline points="17 11 12 6 7 11" />
      <Polyline points="17 18 12 13 7 18" />
    </Svg>
  );
};
Icon.displayName = 'ChevronsUp';
export const ChevronsUp = React.memo(Icon);
