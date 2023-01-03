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
      <Path d="m16 6 4 14" />
      <Path d="M12 6v14" />
      <Path d="M8 8v12" />
      <Path d="M4 4v16" />
    </Svg>
  );
};
Icon.displayName = 'Library';
export const Library = React.memo(Icon);
