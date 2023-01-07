import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 12H3" />
      <Path d="M16 6H3" />
      <Path d="M12 18H3" />
      <Path d="m16 12 5 3-5 3v-6Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'ListVideo';
export const ListVideo = React.memo(Icon);
