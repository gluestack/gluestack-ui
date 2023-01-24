import React, { forwardRef } from 'react';
import { usePopover } from './PopoverContext';

const PopoverHeader = (StyledPopoverHeader: any) =>
  forwardRef(({ children, ...props }: any, ref: any) => {
    const { setHeaderMounted, headerId } = usePopover('PopoverContext');

    React.useEffect(() => {
      if (setHeaderMounted) {
        setHeaderMounted(true);
        return () => {
          setHeaderMounted(false);
        };
      } else {
        return () => {};
      }
    }, [setHeaderMounted]);

    return (
      <StyledPopoverHeader nativeID={headerId} ref={ref} {...props}>
        {children}
      </StyledPopoverHeader>
    );
  });

export default PopoverHeader;
