import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <_Circle cx="12" cy="10" r="8" />
      <_Circle cx="12" cy="10" r="3" />
      <Path d="M7 22h10" />
      <Path d="M12 22v-4" />
    </Svg>
  );
};
Icon.displayName = 'Webcam';
export const Webcam = React.memo(Icon);
