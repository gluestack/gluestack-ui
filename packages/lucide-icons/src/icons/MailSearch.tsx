import React from 'react';
import { Svg, Circle as _Circle, Path } from 'react-native-svg';
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
      <Path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
      <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <Path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
      <_Circle cx="18" cy="18" r="3" />
      <Path d="m22 22-1.5-1.5" />
    </Svg>
  );
};
Icon.displayName = 'MailSearch';
export const MailSearch = React.memo(Icon);
