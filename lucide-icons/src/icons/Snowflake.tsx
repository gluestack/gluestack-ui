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
      <Line x1="2" y1="12" x2="22" y2="12" />
      <Line x1="12" y1="2" x2="12" y2="22" />
      <Path d="m20 16-4-4 4-4" />
      <Path d="m4 8 4 4-4 4" />
      <Path d="m16 4-4 4-4-4" />
      <Path d="m8 20 4-4 4 4" />
    </Svg>
  );
};
Icon.displayName = 'Snowflake';
export const Snowflake = React.memo(Icon);
