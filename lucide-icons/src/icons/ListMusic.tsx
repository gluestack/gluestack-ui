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
      <Path d="M21 15V6" />
      <Path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      <Path d="M12 12H3" />
      <Path d="M16 6H3" />
      <Path d="M12 18H3" />
    </Svg>
  );
};
Icon.displayName = 'ListMusic';
export const ListMusic = React.memo(Icon);
