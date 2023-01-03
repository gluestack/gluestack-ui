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
      <Path d="M8 22h8" />
      <Path d="M12 11v11" />
      <Path d="m19 3-7 8-7-8Z" />
    </Svg>
  );
};
Icon.displayName = 'Martini';
export const Martini = React.memo(Icon);
