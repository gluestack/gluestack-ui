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
      <Path d="m3 12 7-7v4h11v6H10v4z" />
    </Svg>
  );
};
Icon.displayName = 'ArrowBigLeft';
export const ArrowBigLeft = React.memo(Icon);
