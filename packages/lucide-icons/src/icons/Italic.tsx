import React from 'react';
import { Svg, Line } from 'react-native-svg';
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
      <Line x1="19" y1="4" x2="10" y2="4" />
      <Line x1="14" y1="20" x2="5" y2="20" />
      <Line x1="15" y1="4" x2="9" y2="20" />
    </Svg>
  );
};
Icon.displayName = 'Italic';
export const Italic = React.memo(Icon);
