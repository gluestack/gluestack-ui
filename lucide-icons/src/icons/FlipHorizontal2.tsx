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
      <Path d="m3 7 5 5-5 5V7" />
      <Path d="m21 7-5 5 5 5V7" />
      <Path d="M12 20v2" />
      <Path d="M12 14v2" />
      <Path d="M12 8v2" />
      <Path d="M12 2v2" />
    </Svg>
  );
};
Icon.displayName = 'FlipHorizontal2';
export const FlipHorizontal2 = React.memo(Icon);
