import React, { memo } from 'react';
import { StyledH4 } from '../../styled-components';
import GenerateID from '../../utils/heading-id-generator';
export const H4 = memo(({ ...props }: any) => {
  const headingId = GenerateID(props.children);
  return <StyledH4 {...props} nativeID={headingId} />;
});
