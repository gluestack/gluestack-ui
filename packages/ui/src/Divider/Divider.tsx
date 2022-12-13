import React, { forwardRef } from 'react';
import { Platform } from 'react-native';
import { UIContext } from '../UIProvider';

const Divider = ({ children, ...props }: any, ref: any) => {
  const { StyledDivider } = React.useContext(UIContext);
  const { orientation, variant } = props;
  return (
    <StyledDivider
      ref={ref}
      {...props}
      aria-orientation={variant ?? orientation}
      //@ts-ignore web only role
      accessibilityRole={Platform.OS === 'web' ? 'separator' : undefined}
    >
      {children}
    </StyledDivider>
  );
};

export default forwardRef(Divider);
