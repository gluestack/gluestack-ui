import React, { forwardRef } from 'react';
import { usePopoverContent } from './PopoverContext';

const PopoverBody = (StyledPopoverBody: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { value } = usePopoverContent('PopoverContext');
    const { setBodyMounted, bodyId } = value;

    React.useEffect(() => {
      if (setBodyMounted) {
        setBodyMounted(true);
        return () => {
          setBodyMounted(false);
        };
      } else {
        return () => {};
      }
    }, [setBodyMounted]);

    return (
      <StyledPopoverBody nativeID={bodyId} ref={ref} {...props}>
        {children}
      </StyledPopoverBody>
    );
  });

export default PopoverBody;
