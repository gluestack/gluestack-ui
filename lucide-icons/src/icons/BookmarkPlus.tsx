import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
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
      <Path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
      <Line x1="12" x2="12" y1="7" y2="13" />
      <Line x1="15" x2="9" y1="10" y2="10" />
    </Svg>
  );
};
Icon.displayName = 'BookmarkPlus';
export const BookmarkPlus = React.memo(Icon);
