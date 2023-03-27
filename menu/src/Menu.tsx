import React, { forwardRef, useEffect } from 'react';
import { AccessibilityInfo, Pressable, StyleSheet } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';
import { PresenceTransition } from '@gluestack-ui/transitions';
import { Overlay } from '@gluestack-ui/overlay';
import { MenuProvider } from './context';
// import { useMenuTrigger } from './useMenu';

// import { useMenuTrigger } from '@react-native-aria/menu';

import { useFocus } from '@react-aria/interactions';

import { Item, useMenuTriggerState, useTreeState } from 'react-stately';

import { useMenuTrigger, useMenu, useMenuItem } from '@react-aria/menu';
// import MenuContent from './MenuContent';

// export const useFocus = () => {
//   const [isFocused, setFocused] = React.useState(false);
//   return {
//     focusProps: {
//       onFocus: () => setFocused(true),
//       onBlur: () => setFocused(false),
//     },
//     isFocused,
//   };
// };

export function MenuItem({ item, state, ...props }) {
  // Get props for the menu item element
  let ref = React.useRef(null);
  let { menuItemProps, isFocused, isSelected, isDisabled } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  console.log(props, 'hello world 2222');

  return (
    <li
      {...menuItemProps}
      ref={ref}
      style={{
        background: isFocused ? 'gray' : 'transparent',
        color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
        padding: '2px 5px',
        outline: 'none',
        cursor: 'default',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}

// function MenuItem({ children, state, onAction, onClose }: any) {
//   // Get props for the menu item element
//   let ref = React.useRef();
//   let { menuItemProps } = useMenuItem(
//     {
//       key: Math.random(),
//     },
//     state,
//     ref
//   );

//   console.log(menuItemProps, children, 'menu item props');
//   // Handle focus events so we can apply highlighted
//   // style to the focused menu item
//   let [isFocused, setFocused] = React.useState(false);
//   let { focusProps } = useFocus({ onFocusChange: setFocused });

//   return (
//     <li
//       {...menuItemProps}
//       {...focusProps}
//       ref={ref}
//       style={{
//         backgroundColor: isFocused ? 'gray' : 'transparent',
//         // color: isFocused ? 'white' : 'black',
//         // padding: '2px 5px',
//         // outline: 'none',
//         // cursor: 'pointer',
//       }}
//     >
//       hello
//     </li>
//   );
// }

const MenuContent = (props: any) => {
  const collectionItems: any = [];
  const collectionMap: any = {};

  props.children.map((child: any) => {
    const item = (
      <Item key={child?.props?.children.toLowerCase()}>
        {child?.props?.children}
      </Item>
    );
    collectionMap[child?.props?.children.toLowerCase()] = {
      item: item,
      child: child,
      props: child.props,
    };
    collectionItems.push(item);
  });

  let state = useTreeState({ ...props, children: collectionItems });
  let ref = React.useRef(null);

  let { menuProps } = useMenu(props, state, ref);

  // console.log(menuProps, state, 'menuProps here');

  return (
    <div role="menu" {...menuProps} ref={ref}>
      {/* {[...state.collection]} */}
      {[...state.collection].map((item) => (
        <MenuItem
          key={item.key}
          item={item}
          state={state}
          {...collectionMap[item.key].props}
        />
      ))}

      {/* {React.Children.map(props.children, (child, index) => {
              return (
                <MenuItem
                  state={itemState}
                  onAction={toggleMenu}
                  onClose={() => {
                    state.close();
                  }}
                >
                  hello
                </MenuItem>
              );
            })} */}

      {/* {collectionItems} */}
    </div>
  );
};
const Menu = (StyledMenu: any) =>
  forwardRef((props: any, ref: any) => {
    const triggerRef = React.useRef();
    let state = useMenuTriggerState(props);

    // return null;
    let { menuTriggerProps, menuProps } = useMenuTrigger({}, state, triggerRef);

    // console.log(menuProps, menuTriggerProps, 'state here');

    // return null;
    // const { triggerProps } = useMenuTrigger({}, triggerRef);
    // const { menuProps } = useMenu({}, menuTriggerProps);

    // Add an event listener to the trigger button to toggle the menu
    const toggleMenu = () => {
      if (state.isOpen) {
        state.close();
      } else {
        state.open();
      }
    };

    const updatedTrigger = (reference: any) => {
      return props.trigger(
        {
          ...menuTriggerProps,
          // ref: reference,
          onPress: toggleMenu,
          collapsable: false,
        },
        { open: state.isOpen }
      );
    };

    console.log(state.isOpen, 'children');
    return (
      <>
        {/* {updatedTrigger(triggerRef)} */}

        <button
          {...menuTriggerProps}
          buttonRef={triggerRef}
          // onPress={toggleMenu}
          style={{ height: 30, fontSize: 14 }}
        >
          Button
        </button>
        {/* {React.cloneElement(props.trigger, {
          ...menuTriggerProps,
          ref: triggerRef,
          onClick: toggleMenu,
        })} */}
        {state.isOpen && <MenuContent {...props} {...menuProps}></MenuContent>}
      </>
    );
  });

export default Menu;

// const Menu = (StyledMenu: any) =>
//   forwardRef(
//     (
//       {
//         children,
//         placement = 'bottom',
//         onOpen,
//         onClose,
//         defaultIsOpen,
//         closeOnOverlayClick = true,
//         trigger,
//         ...props
//       }: any,
//       ref: any
//     ) => {
//       // const [isOpen, setIsOpen] = useControllableState({
//       //   value: props.isOpen,
//       //   defaultValue: defaultIsOpen,
//       //   onChange: (value) => {
//       //     value ? onOpen && onOpen() : onClose && onClose();
//       //   },
//       // });

//       let state = useMenuTriggerState(props);

//       const { useRNModal, ...remProps } = props;

//       // const handleOpen = React.useCallback(() => {
//       //   setIsOpen(true);
//       // }, [setIsOpen]);

//       // const handleClose = React.useCallback(() => {
//       //   setIsOpen(false);
//       // }, [setIsOpen]);

//       // const triggerProps = useMenuTrigger({
//       //   handleOpen,
//       //   isOpen,
//       // });
//       const targetRef = React.useRef(null);

//       const { menuTriggerProps, menuProps } = useMenuTrigger(
//         {},
//         state,
//         targetRef
//       );

//       console.log(menuTriggerProps, menuProps, state, 'hello');
//       // const []

//       const updatedTrigger = (reference: any) => {
//         return trigger(
//           {
//             ...menuTriggerProps,
//             ref: reference,
//             // onPress: handleOpen,
//             collapsable: false,
//           },
//           { open: state.isOpen }
//         );
//       };

//       // let floatingParams: any = {};

//       // if (Platform.OS === 'web') {
//       //   floatingParams = { whileElementsMounted: autoUpdate };
//       // }

//       // const { x, y, reference, floating, strategy } = useFloating({
//       //   placement: placement,
//       //   middleware: [offset(10), flip(), shift()],
//       //   ...floatingParams,
//       // });

//       // useEffect(() => {
//       //   if (isOpen) {
//       //     AccessibilityInfo.announceForAccessibility('Popup window');
//       //   }
//       // }, [isOpen]);

//       return (
//         <>
//           {updatedTrigger(targetRef)}
//           <Overlay
//             isOpen={state.isOpen}
//             onRequestClose={state.close}
//             isKeyboardDismissable
//             useRNModal={useRNModal}
//             unmountOnExit
//           >
//             <PresenceTransition
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1, transition: { duration: 150 } }}
//               exit={{ opacity: 0, transition: { duration: 100 } }}
//               visible={state.isOpen}
//               style={StyleSheet.absoluteFill}
//             >
//               <StyledMenu {...remProps} {...menuProps} ref={ref}>
//                 <MenuProvider
//                   value={{
//                     targetRef,
//                     handleClose: state.close,
//                     closeOnOverlayClick: closeOnOverlayClick,
//                     placement,
//                   }}
//                 >
//                   {children}
//                 </MenuProvider>
//               </StyledMenu>
//             </PresenceTransition>
//           </Overlay>
//         </>
//       );
//     }
//   );

// export default Menu;
