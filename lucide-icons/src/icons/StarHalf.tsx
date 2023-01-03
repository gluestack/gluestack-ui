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
      <Path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
    </Svg>
  );
};
Icon.displayName = 'StarHalf';
export const StarHalf = React.memo(Icon);
