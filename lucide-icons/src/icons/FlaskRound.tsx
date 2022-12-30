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
      <Path d="M10 2v7.31" />
      <Path d="M14 9.3V1.99" />
      <Path d="M8.5 2h7" />
      <Path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      <Path d="M5.58 16.5h12.85" />
    </Svg>
  );
};
Icon.displayName = 'FlaskRound';
export const FlaskRound = React.memo(Icon);
