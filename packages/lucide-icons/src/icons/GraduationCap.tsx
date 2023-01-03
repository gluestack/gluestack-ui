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
      <Path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <Path d="M6 12v5c3 3 9 3 12 0v-5" />
    </Svg>
  );
};
Icon.displayName = 'GraduationCap';
export const GraduationCap = React.memo(Icon);
