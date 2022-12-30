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
      <Path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <Path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </Svg>
  );
};
Icon.displayName = 'Crop';
export const Crop = React.memo(Icon);
