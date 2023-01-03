import React from 'react';
import { Svg, Circle as _Circle, Line, Path } from 'react-native-svg';
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
      <Line x1="6" y1="3" x2="6" y2="15" />
      <_Circle cx="18" cy="6" r="3" />
      <_Circle cx="6" cy="18" r="3" />
      <Path d="M18 9a9 9 0 0 1-9 9" />
    </Svg>
  );
};
Icon.displayName = 'GitBranch';
export const GitBranch = React.memo(Icon);
