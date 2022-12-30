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
      <Line x1="12" y1="2" x2="12" y2="6" />
      <Line x1="12" y1="18" x2="12" y2="22" />
      <Line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
      <Line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
      <Line x1="2" y1="12" x2="6" y2="12" />
      <Line x1="18" y1="12" x2="22" y2="12" />
      <Line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
      <Line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
    </Svg>
  );
};
Icon.displayName = 'Loader';
export const Loader = React.memo(Icon);
