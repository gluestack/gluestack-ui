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
      <Rect x="2" y="6" width="20" height="12" rx="2" />
      <Path d="M12 12h.01" />
      <Path d="M17 12h.01" />
      <Path d="M7 12h.01" />
    </Svg>
  );
};
Icon.displayName = 'FormInput';
export const FormInput = React.memo(Icon);
