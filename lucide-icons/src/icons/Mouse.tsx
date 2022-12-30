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
      <Rect x="6" y="3" width="12" height="18" rx="6" />
      <Path d="M12 7v4" />
    </Svg>
  );
};
Icon.displayName = 'Mouse';
export const Mouse = React.memo(Icon);
