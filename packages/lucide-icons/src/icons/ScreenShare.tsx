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
      <Path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <Path d="M8 21h8" />
      <Path d="M12 17v4" />
      <Path d="m17 8 5-5" />
      <Path d="M17 3h5v5" />
    </Svg>
  );
};
Icon.displayName = 'ScreenShare';
export const ScreenShare = React.memo(Icon);
