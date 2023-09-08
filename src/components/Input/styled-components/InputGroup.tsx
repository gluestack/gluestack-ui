import React, { Children, cloneElement, forwardRef } from 'react';
import { styled } from '../../styled';
import { View } from 'react-native';

const InputGroupStyled = styled(View, {
  flexDirection: 'row',
});

export const InputGroup = forwardRef(
  (
    { children, ...props }: Parameters<typeof InputGroupStyled>[0],
    ref?: any
  ) => {
    const ChildrenStyled = Children.map(children, (child, index) => {
      if (index === 0)
        return cloneElement(child, {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        });
      if (index === Children.count(children) - 1)
        return cloneElement(child, {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        });

      return cloneElement(child, {
        borderRadius: 0,
      });
    });
    return (
      <InputGroupStyled {...props} ref={ref}>
        {ChildrenStyled}
      </InputGroupStyled>
    );
  }
);
