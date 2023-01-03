import React from 'react';
import { Svg, Rect } from 'react-native-svg';
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
      <Rect
        x="12"
        y="1"
        width="15.56"
        height="15.56"
        rx="2.41"
        transform="rotate(45 12 1)"
      />
    </Svg>
  );
};
Icon.displayName = 'Diamond';
export const Diamond = React.memo(Icon);
