import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
      <Path d="M6 9.01V9" />
      <Path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" />
    </StyledSvg>
  );
};
Icon.displayName = 'Tags';
export const Tags = React.memo(Icon);
