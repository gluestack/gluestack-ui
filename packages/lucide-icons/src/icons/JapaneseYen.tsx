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
      <Path d="M12 9.5V21m0-11.5L6 3m6 6.5L18 3" />
      <Path d="M6 15h12" />
      <Path d="M6 11h12" />
    </Svg>
  );
};
Icon.displayName = 'JapaneseYen';
export const JapaneseYen = React.memo(Icon);
