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
      <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <Line x1="9.5" y1="9" x2="14.5" y2="14" />
      <Line x1="14.5" y1="9" x2="9.5" y2="14" />
    </Svg>
  );
};
Icon.displayName = 'ShieldClose';
export const ShieldClose = React.memo(Icon);
