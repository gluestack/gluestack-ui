import React, { memo } from 'react';
import { StyledH2 } from '../../styled-components';
import GenerateID from '../../utils/heading-id-generator';
export const H2 = memo(({ ...props }: any) => {
  const headingId = GenerateID(props.children);
  return <StyledH2 {...props} nativeID={headingId} />;
});
