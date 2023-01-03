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
      <Line x1="2" x2="5" y1="12" y2="12" />
      <Line x1="19" x2="22" y1="12" y2="12" />
      <Line x1="12" x2="12" y1="2" y2="5" />
      <Line x1="12" x2="12" y1="19" y2="22" />
      <Path d="M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11" />
      <Path d="M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29" />
      <Line x1="2" x2="22" y1="2" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'LocateOff';
export const LocateOff = React.memo(Icon);
