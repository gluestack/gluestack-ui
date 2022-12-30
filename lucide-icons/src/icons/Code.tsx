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
      <Polyline points="16 18 22 12 16 6" />
      <Polyline points="8 6 2 12 8 18" />
    </Svg>
  );
};
Icon.displayName = 'Code';
export const Code = React.memo(Icon);
