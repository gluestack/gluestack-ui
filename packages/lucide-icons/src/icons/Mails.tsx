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
      <Rect x="6" y="4" width="16" height="13" rx="2" />
      <Path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
      <Path d="M2 8v11c0 1.1.9 2 2 2h14" />
    </Svg>
  );
};
Icon.displayName = 'Mails';
export const Mails = React.memo(Icon);
