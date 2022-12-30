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
      <Polyline points="13 17 18 12 13 7" />
      <Polyline points="6 17 11 12 6 7" />
    </Svg>
  );
};
Icon.displayName = 'ChevronsRight';
export const ChevronsRight = React.memo(Icon);
