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
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
      <Path d="M21 5h-6" />
      <Path d="M18.021 9C18.29 15.193 21 17 21 17H3s3-2 3-9a6 6 0 0 1 7-5.916" />
    </Svg>
  );
};
Icon.displayName = 'BellMinus';
export const BellMinus = React.memo(Icon);
