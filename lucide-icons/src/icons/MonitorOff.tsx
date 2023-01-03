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
      <Path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
      <Path d="M22 15V5a2 2 0 0 0-2-2H9" />
      <Path d="M8 21h8" />
      <Path d="M12 17v4" />
      <Path d="m2 2 20 20" />
    </Svg>
  );
};
Icon.displayName = 'MonitorOff';
export const MonitorOff = React.memo(Icon);
