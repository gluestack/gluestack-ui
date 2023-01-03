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
      <Path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
      <Path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
      <_Circle cx="12" cy="12" r="3" />
      <Path d="m18 22-3-3 3-3" />
      <Path d="m6 2 3 3-3 3" />
    </Svg>
  );
};
Icon.displayName = 'SwitchCamera';
export const SwitchCamera = React.memo(Icon);
