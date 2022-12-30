import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Path d="M22 12a9.92 9.92 0 0 0-3.24-6.41 10.12 10.12 0 0 0-13.52 0A9.92 9.92 0 0 0 2 12Z" />
      <Path d="M12 12v8a2 2 0 0 0 4 0" />
      <Line x1="12" y1="2" x2="12" y2="3" />
    </Svg>
  );
};
Icon.displayName = 'Umbrella';
export const Umbrella = React.memo(Icon);
