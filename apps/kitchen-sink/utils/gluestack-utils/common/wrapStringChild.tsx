import React from 'react';

export const wrapStringChild = (children: any, StyledBoxText: any) => {
  return React.Children.map(children, (child) => {
    return typeof child === 'string' ||
      typeof child === 'number' ||
      (child?.type === React.Fragment &&
        (typeof child.props?.children === 'string' ||
          typeof child.props?.children === 'number')) ? (
      <StyledBoxText>{child}</StyledBoxText>
    ) : (
      child
    );
  });
};
