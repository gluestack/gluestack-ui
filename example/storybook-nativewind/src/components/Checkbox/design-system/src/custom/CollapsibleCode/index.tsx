import React from 'react';
import { Box } from '../../primitives/Box';

export const CollapsibleCode = (props: any) => {
  const clonedChildren = React.cloneElement(props.children.props.children, {
    ...props.children.props.children.props,
    h: '$full',
  });
  const finalChildren = React.cloneElement(props.children, {
    ...props.children.props,
    children: clonedChildren,
  });

  return (
    <Box borderRadius={8} mb="$4" bg="transparent" position="relative">
      <Box>{finalChildren}</Box>
    </Box>
  );
};
