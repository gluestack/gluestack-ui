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
      <Path d="m14 12-8.501 8.501a2.12 2.12 0 0 1-2.998 0h-.002a2.12 2.12 0 0 1 0-2.998L11 9.002" />
      <Path d="m9 7 4-4 6 6h3l-.13.648a7.648 7.648 0 0 1-5.081 5.756L15 16v-3z" />
    </Svg>
  );
};
Icon.displayName = 'Axe';
export const Axe = React.memo(Icon);
