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
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <Path d="M9 22v-4h6v4" />
      <Path d="M8 6h.01" />
      <Path d="M16 6h.01" />
      <Path d="M12 6h.01" />
      <Path d="M12 10h.01" />
      <Path d="M12 14h.01" />
      <Path d="M16 10h.01" />
      <Path d="M16 14h.01" />
      <Path d="M8 10h.01" />
      <Path d="M8 14h.01" />
    </Svg>
  );
};
Icon.displayName = 'Building';
export const Building = React.memo(Icon);
