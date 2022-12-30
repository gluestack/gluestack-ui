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
      <_Circle cx="18" cy="18" r="3" />
      <_Circle cx="6" cy="6" r="3" />
      <Path d="M13 6h3a2 2 0 0 1 2 2v7" />
      <Path d="M11 18H8a2 2 0 0 1-2-2V9" />
    </Svg>
  );
};
Icon.displayName = 'GitCompare';
export const GitCompare = React.memo(Icon);
