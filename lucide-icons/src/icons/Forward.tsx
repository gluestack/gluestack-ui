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
      <Polyline points="15 17 20 12 15 7" />
      <Path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </Svg>
  );
};
Icon.displayName = 'Forward';
export const Forward = React.memo(Icon);
