import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="M6 3v12" />
      <Path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <Path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <Path d="M15 6a9 9 0 0 0-9 9" />
      <Path d="M18 15v6" />
      <Path d="M21 18h-6" />
    </Svg>
  );
};
Icon.displayName = 'GitBranchPlus';
export const GitBranchPlus = React.memo(Icon);
