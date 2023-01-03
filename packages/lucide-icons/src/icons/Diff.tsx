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
      <Path d="M12 3v14" />
      <Path d="M5 10h14" />
      <Path d="M5 21h14" />
    </Svg>
  );
};
Icon.displayName = 'Diff';
export const Diff = React.memo(Icon);
