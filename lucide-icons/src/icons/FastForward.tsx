import React from 'react';
import { Svg, Polygon } from 'react-native-svg';
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
      <Polygon points="13 19 22 12 13 5 13 19" />
      <Polygon points="2 19 11 12 2 5 2 19" />
    </Svg>
  );
};
Icon.displayName = 'FastForward';
export const FastForward = React.memo(Icon);
