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
      <Path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <Path d="M7 22h1a4 4 0 0 0 4-4v-1" />
      <Path d="M7 2h1a4 4 0 0 1 4 4v1" />
    </Svg>
  );
};
Icon.displayName = 'TextCursor';
export const TextCursor = React.memo(Icon);
