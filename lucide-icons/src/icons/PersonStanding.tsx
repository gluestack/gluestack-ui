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
      <_Circle cx="12" cy="5" r="1" />
      <Path d="m9 20 3-6 3 6" />
      <Path d="m6 8 6 2 6-2" />
      <Path d="M12 10v4" />
    </Svg>
  );
};
Icon.displayName = 'PersonStanding';
export const PersonStanding = React.memo(Icon);
