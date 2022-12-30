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
      <Rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <Path d="M12.667 8 10 12h4l-2.667 4" />
    </Svg>
  );
};
Icon.displayName = 'SmartphoneCharging';
export const SmartphoneCharging = React.memo(Icon);
