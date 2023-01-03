import React from 'react';
import { Svg, Circle as _Circle, Line } from 'react-native-svg';
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
      <_Circle cx="12" cy="12" r="3" />
      <Line x1="3" y1="12" x2="9" y2="12" />
      <Line x1="15" y1="12" x2="21" y2="12" />
    </Svg>
  );
};
Icon.displayName = 'GitCommit';
export const GitCommit = React.memo(Icon);
