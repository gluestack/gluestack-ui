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
      <_Circle cx="12" cy="9" r="1" />
      <_Circle cx="19" cy="9" r="1" />
      <_Circle cx="5" cy="9" r="1" />
      <_Circle cx="12" cy="15" r="1" />
      <_Circle cx="19" cy="15" r="1" />
      <_Circle cx="5" cy="15" r="1" />
    </Svg>
  );
};
Icon.displayName = 'GripHorizontal';
export const GripHorizontal = React.memo(Icon);
