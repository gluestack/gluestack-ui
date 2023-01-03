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
      <Rect x="9" y="2" width="6" height="6" />
      <Rect x="16" y="16" width="6" height="6" />
      <Rect x="2" y="16" width="6" height="6" />
      <Path d="M5 16v-4h14v4" />
      <Path d="M12 12V8" />
    </Svg>
  );
};
Icon.displayName = 'Network';
export const Network = React.memo(Icon);
