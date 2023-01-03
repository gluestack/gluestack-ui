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
      <Path d="M9 21V10H5l7-7 7 7h-4v11z" />
    </Svg>
  );
};
Icon.displayName = 'ArrowBigUp';
export const ArrowBigUp = React.memo(Icon);
