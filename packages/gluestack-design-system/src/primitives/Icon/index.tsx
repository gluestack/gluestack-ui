import React, { memo } from 'react';
import { Circle } from 'react-native-svg';
import { StyledSvg } from '../../custom/StyledSvg';
export { Circle } from 'react-native-svg';

export const BulletPointIcon = memo(({ ...props }: any) => {
  return (
    <StyledSvg {...props}>
      <Circle cx={5} cy={5} r={5} />
    </StyledSvg>
  );
});

export { InfoOutlineIcon, CheckIcon } from '@gluestack/ui';
