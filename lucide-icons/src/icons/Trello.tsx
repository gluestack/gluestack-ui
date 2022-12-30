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
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Rect x="7" y="7" width="3" height="9" />
      <Rect x="14" y="7" width="3" height="5" />
    </Svg>
  );
};
Icon.displayName = 'Trello';
export const Trello = React.memo(Icon);
