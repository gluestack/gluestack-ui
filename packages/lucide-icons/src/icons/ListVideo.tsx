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
      <Path d="M12 12H3" />
      <Path d="M16 6H3" />
      <Path d="M12 18H3" />
      <Path d="m16 12 5 3-5 3v-6Z" />
    </Svg>
  );
};
Icon.displayName = 'ListVideo';
export const ListVideo = React.memo(Icon);
