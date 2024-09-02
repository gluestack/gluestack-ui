import React, { forwardRef } from 'react';
import { useRadio } from './RadioProvider';

export const RadioIcon = (StyledRadioIcon: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { isChecked, forceMount } = useRadio('RadioContext');

    if (forceMount || isChecked) {
      return (
        <StyledRadioIcon
          {...props}
          ref={ref}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...props.style,
            visibility: isChecked ? 'visible' : 'hidden',
          }}
        >
          {children}
        </StyledRadioIcon>
      );
    }

    return null;
  });
