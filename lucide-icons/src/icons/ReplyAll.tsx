import React from 'react';
import { Svg, Path, Polyline } from 'react-native-svg';
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
      <Polyline points="7 17 2 12 7 7" />
      <Polyline points="12 17 7 12 12 7" />
      <Path d="M22 18v-2a4 4 0 0 0-4-4H7" />
    </Svg>
  );
};
Icon.displayName = 'ReplyAll';
export const ReplyAll = React.memo(Icon);
