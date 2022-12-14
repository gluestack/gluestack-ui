import React, { forwardRef } from 'react';
import { MenuContext } from './context';
import { useMenuItem } from './useMenu';
import { mergeRefs } from '../utils';
import { UIContext } from '../UIProvider';

const MenuItem = (
  { children, isDisabled, onPress, textValue, ...props }: any,
  ref: any
) => {
  const { StyledMenuItem } = React.useContext(UIContext);

  const { closeOnSelect, handleClose } = React.useContext(MenuContext);
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
            handleClose && handleClose();
          }
        }
      }}
    >
      {children}
      {/* <HStack {..._stack}> */}
      {/* {React.Children.map(children, (child, index: any) => {
          if (typeof child === 'string' || typeof child === 'number') {
            return (
              <Text key={`menu-item-${index}`} {..._text}>
                {child}
              </Text>
            );
          } else {
            return child;
          }
        })} */}
      {/* </HStack> */}
    </StyledMenuItem>
  );
};

export default forwardRef(MenuItem);
