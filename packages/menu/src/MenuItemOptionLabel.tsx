import React, { forwardRef } from 'react';
import { useMenuItem } from './useMenu';

const MenuItemOptionLabel = (StyledMenuItemOptionLabel: any) =>
  forwardRef(({ children, textValue, ...props }: any, ref?: any) => {
    const menuItemRef = React.useRef<any>(null);

    const [textContent, setTextContent] = React.useState('');

    React.useEffect(() => {
      const menuItem = menuItemRef.current;
      if (menuItem) {
        setTextContent((menuItem.textContent ?? '').trim());
      }
    }, [children]);

    const menuItemProps = useMenuItem({
      textValue: textValue ?? textContent,
      ref: menuItemRef,
    });

    return (
      <StyledMenuItemOptionLabel {...menuItemProps} {...props} ref={ref}>
        {children}
      </StyledMenuItemOptionLabel>
    );
  });

export default MenuItemOptionLabel;
