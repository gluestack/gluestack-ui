import React, { forwardRef } from 'react';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../utils';
import { UIContext } from '../UIProvider';
import { useMenu } from './MenuContext';

const MenuItem = (
  { children, isDisabled, onPress, textValue, ...props }: any,
  ref: any
) => {
  const { StyledMenuItem } = React.useContext(UIContext);

  const { closeOnSelect, onClose } = useMenu('MenuContext');
  const menuItemRef = React.useRef<any>(null);
  const mergedRef = mergeRefs([menuItemRef, ref]);

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
    <StyledMenuItem
      {...menuItemProps}
      {...props}
      ref={mergedRef}
      disabled={isDisabled}
      accessibilityState={{
        disabled: isDisabled,
      }}
      onPress={(e: any) => {
        if (!isDisabled) {
          onPress && onPress(e);
          if (closeOnSelect) {
            onClose && onClose();
          }
        }
      }}
    >
      {children}
    </StyledMenuItem>
  );
};

export default forwardRef(MenuItem);
