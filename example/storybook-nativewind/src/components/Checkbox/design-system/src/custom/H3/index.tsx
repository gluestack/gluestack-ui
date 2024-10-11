import React, { memo } from 'react';
import { StyledH3 } from '../../styled-components';
import GenerateID from '../../utils/heading-id-generator';

export const H3 = memo(({ ...props }: any) => {
  const headingId = GenerateID(props.children);
  return <StyledH3 {...props} nativeID={headingId} />;
});
