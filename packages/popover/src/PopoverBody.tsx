import React, { forwardRef } from 'react';
import { usePopover } from './PopoverContext';

const PopoverBody = (StyledPopoverBody: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { setBodyMounted, bodyId } = usePopover('PopoverContext');

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
