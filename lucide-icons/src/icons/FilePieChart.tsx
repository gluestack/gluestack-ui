import React from 'react';
import { Svg, Path, Polyline } from 'react-native-svg';
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
      <Path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
      <Polyline points="14 2 14 8 20 8" />
      <Path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
      <Path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
    </Svg>
  );
};
Icon.displayName = 'FilePieChart';
export const FilePieChart = React.memo(Icon);
