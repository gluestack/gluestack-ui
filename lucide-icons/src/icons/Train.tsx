import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';
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
      <Rect x="4" y="3" width="16" height="16" rx="2" />
      <Path d="M4 11h16" />
      <Path d="M12 3v8" />
      <Path d="m8 19-2 3" />
      <Path d="m18 22-2-3" />
      <Path d="M8 15h0" />
      <Path d="M16 15h0" />
    </Svg>
  );
};
Icon.displayName = 'Train';
export const Train = React.memo(Icon);
