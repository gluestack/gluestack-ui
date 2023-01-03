import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <Path d="M16 2v4" />
      <Path d="M8 2v4" />
      <Path d="M3 10h5" />
      <Path d="M17.5 17.5 16 16.25V14" />
      <Path d="M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" />
    </Svg>
  );
};
Icon.displayName = 'CalendarClock';
export const CalendarClock = React.memo(Icon);
