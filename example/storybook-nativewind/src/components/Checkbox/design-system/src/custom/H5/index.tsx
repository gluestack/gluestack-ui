import React, { memo } from 'react';
import { StyledH5 } from '../../styled-components';
import GenerateID from '../../utils/heading-id-generator';
export const H5 = memo(({ ...props }: any) => {
  const headingId = GenerateID(props.children);
  return <StyledH5 {...props} nativeID={headingId} />;
});
