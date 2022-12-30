import React from 'react';
import { Svg, Circle as _Circle, Line } from 'react-native-svg';
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
      <Line x1="10" y1="15" x2="10" y2="9" />
      <Line x1="14" y1="15" x2="14" y2="9" />
    </Svg>
  );
};
Icon.displayName = 'PauseCircle';
export const PauseCircle = React.memo(Icon);
