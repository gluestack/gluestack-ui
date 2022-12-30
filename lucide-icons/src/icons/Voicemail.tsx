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
      <_Circle cx="6" cy="12" r="4" />
      <_Circle cx="18" cy="12" r="4" />
      <Line x1="6" y1="16" x2="18" y2="16" />
    </Svg>
  );
};
Icon.displayName = 'Voicemail';
export const Voicemail = React.memo(Icon);
