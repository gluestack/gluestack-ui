import React from 'react';
import { Svg, Circle as _Circle } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="6" />
      <_Circle cx="12" cy="12" r="2" />
    </Svg>
  );
};
Icon.displayName = 'Target';
export const Target = React.memo(Icon);
