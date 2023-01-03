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
      <Line x1="2" y1="2" x2="22" y2="22" />
      <Path d="M12 12H2v4h14" />
      <Path d="M22 12v4" />
      <Path d="M18 12h-.5" />
      <Path d="M7 12v4" />
      <Path d="M18 8c0-2.5-2-2.5-2-5" />
      <Path d="M22 8c0-2.5-2-2.5-2-5" />
    </Svg>
  );
};
Icon.displayName = 'CigaretteOff';
export const CigaretteOff = React.memo(Icon);
