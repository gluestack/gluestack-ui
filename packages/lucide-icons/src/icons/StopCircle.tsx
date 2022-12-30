import React from 'react';
import { Svg, Circle as _Circle, Rect } from 'react-native-svg';
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
      <Rect x="9" y="9" width="6" height="6" />
    </Svg>
  );
};
Icon.displayName = 'StopCircle';
export const StopCircle = React.memo(Icon);
