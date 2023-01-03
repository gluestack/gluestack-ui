import React from 'react';
import { Svg, Circle as _Circle, Polyline } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="10" />
      <Polyline points="12 6 12 12 7.5 12" />
    </Svg>
  );
};
Icon.displayName = 'Clock9';
export const Clock9 = React.memo(Icon);
