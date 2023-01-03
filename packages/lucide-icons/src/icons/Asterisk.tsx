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
      <Path d="M12 6v12" />
      <Path d="M17.196 9 6.804 15" />
      <Path d="m6.804 9 10.392 6" />
    </Svg>
  );
};
Icon.displayName = 'Asterisk';
export const Asterisk = React.memo(Icon);
