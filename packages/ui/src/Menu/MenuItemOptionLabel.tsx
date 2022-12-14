import React, { forwardRef } from 'react';
import { useMenuItem } from './useMenu';
import { UIContext } from '../UIProvider';

const MenuItemOptionLabel = (
  { children, textValue, ...props }: any,
  ref: any
) => {
  const { StyledMenuItemOptionLabel } = React.useContext(UIContext);

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
};

export default forwardRef(MenuItemOptionLabel);
