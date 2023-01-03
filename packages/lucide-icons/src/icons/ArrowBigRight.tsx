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
      <Path d="m21 12-7-7v4H3v6h11v4z" />
    </Svg>
  );
};
Icon.displayName = 'ArrowBigRight';
export const ArrowBigRight = React.memo(Icon);
