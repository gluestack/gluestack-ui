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
      <Path d="M21 3H3v7h18V3z" />
      <Path d="M21 14h-5v7h5v-7z" />
      <Path d="M12 14H3v7h9v-7z" />
    </Svg>
  );
};
Icon.displayName = 'LayoutTemplate';
export const LayoutTemplate = React.memo(Icon);
