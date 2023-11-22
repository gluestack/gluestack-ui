import React, { createContext, useContext } from 'react';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import { AnimatePresence } from '@gluestack-style/animation-resolver';
import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
} from './styled-components';
import { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import { GenericComponentType } from '../../types';
import { Box } from '../Box';
import { Button } from '../Button';

export const AccessibleActionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

type IAccessibleActionsheet = typeof AccessibleActionsheet;

interface Actionsheet extends IAccessibleActionsheet {
  /**
   * @deprecated Use ActionsheetContent instead.
   */
  Content: IAccessibleActionsheet['Content'];
  /**
   * @deprecated Use ActionsheetItem instead.
   */
  Item: IAccessibleActionsheet['Item'];
  /**
   * @deprecated Use ActionsheetItemText instead.
   */
  ItemText: IAccessibleActionsheet['ItemText'];
  /**
   * @deprecated Use ActionsheetDragIndicator instead.
   */
  DragIndicator: IAccessibleActionsheet['DragIndicator'];
  /**
   * @deprecated Use ActionsheetDragIndicatorWrapper instead.
   */
  DragIndicatorWrapper: IAccessibleActionsheet['DragIndicatorWrapper'];
  /**
   * @deprecated Use ActionsheetBackdrop instead.
   */
  Backdrop: IAccessibleActionsheet['Backdrop'];
  /**
   * @deprecated Use ActionsheetScrollView instead.
   */
  ScrollView: IAccessibleActionsheet['ScrollView'];
  /**
   * @deprecated Use ActionsheetVirtualizedList instead.
   */
  VirtualizedList: IAccessibleActionsheet['VirtualizedList'];
  /**
   * @deprecated Use ActionsheetFlatList instead.
   */
  FlatList: IAccessibleActionsheet['FlatList'];
  /**
   * @deprecated Use ActionsheetSectionList instead.
   */
  SectionList: IAccessibleActionsheet['SectionList'];
  /**
   * @deprecated Use ActionsheetSectionHeaderText instead.
   */
  SectionHeaderText: IAccessibleActionsheet['SectionHeaderText'];
  /**
   * @deprecated Use ActionsheetIcon instead.
   */
  Icon: IAccessibleActionsheet['Icon'];
}

const ActionSheetContext = createContext<any>({});

const NewActionsheet = forwardRef(
  (
    {
      isOpen,
      onClose,
      disableOverlay = false,
      hideDragIndicator = false, // use context
      _backdrop,
      useRNModal,
      children,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleActionsheet
        useRNModal={useRNModal}
        isOpen={isOpen}
        onClose={onClose}
        {...resolvedPropForGluestack}
        ref={ref}
      >
        {!disableOverlay && <AccessibleActionsheet.Backdrop {..._backdrop} />}
        <ActionSheetContext.Provider value={{ hideDragIndicator }}>
          {children}
        </ActionSheetContext.Provider>
      </AccessibleActionsheet>
    );
  }
);

const AccessibleActionsheetContent = forwardRef(
  (
    {
      children,
      // space above DragIndicatorWrapper
      _dragIndicatorWrapperOffSet = null,
      // DragIndicatorWrapper
      _dragIndicatorWrapper = null,
      // DragIndicator
      _dragIndicator = null,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    const resolvedPropsForDragIndicator = usePropResolution(_dragIndicator);
    const resolvedPropsForDragIndicatorWrapper = usePropResolution(
      _dragIndicatorWrapper
    );
    const { hideDragIndicator } = useContext(ActionSheetContext);

    return (
      <AccessibleActionsheet.Content {...resolvedProps} ref={ref}>
        {!hideDragIndicator && (
          <>
            {_dragIndicatorWrapperOffSet && (
              <Box py="2" {..._dragIndicatorWrapperOffSet} />
            )}
            <AccessibleActionsheet.DragIndicatorWrapper
              {...resolvedPropsForDragIndicatorWrapper}
            >
              <AccessibleActionsheet.DragIndicator
                {...resolvedPropsForDragIndicator}
              />
            </AccessibleActionsheet.DragIndicatorWrapper>
          </>
        )}
        {children}
      </AccessibleActionsheet.Content>
    );
  }
);

const AccessibleActionsheetItem = forwardRef(
  (
    { children, leftIcon, rightIcon, startIcon, endIcon, ...props }: any,
    ref?: any
  ) => {
    return (
      <AccessibleActionsheet.Item
        variant="actionsheetStyle"
        {...props}
        ref={ref}
      >
        {(leftIcon && leftIcon) ?? (startIcon && startIcon)}
        {children && typeof children === 'string' ? (
          <AccessibleActionsheet.ItemText>
            {children}
          </AccessibleActionsheet.ItemText>
        ) : (
          children && { children }
        )}
      </AccessibleActionsheet.Item>
    );
  }
);

const ActionsheetNew = NewActionsheet as any;
ActionsheetNew.Content = AccessibleActionsheetContent;
ActionsheetNew.Item = AccessibleActionsheetItem;
ActionsheetNew.ItemText = AccessibleActionsheet.ItemText;
ActionsheetNew.DragIndicator = AccessibleActionsheet.DragIndicator;
ActionsheetNew.DragIndicator = AccessibleActionsheet.DragIndicator;
ActionsheetNew.DragIndicatorWrapper =
  AccessibleActionsheet.DragIndicatorWrapper;
ActionsheetNew.Backdrop = AccessibleActionsheet.Backdrop;
ActionsheetNew.ScrollView = AccessibleActionsheet.ScrollView;
ActionsheetNew.VirtualizedList = AccessibleActionsheet.VirtualizedList;
ActionsheetNew.FlatList = AccessibleActionsheet.FlatList;
ActionsheetNew.SectionList = AccessibleActionsheet.SectionList;
ActionsheetNew.SectionHeaderText = AccessibleActionsheet.SectionHeaderText;
ActionsheetNew.Icon = AccessibleActionsheet.Icon;

export type IActionsheetComponentType<Actionsheet, Content, Item> =
  GenericComponentType<Actionsheet> & {
    Content: GenericComponentType<Content>;
    Item: Item;
  };

export const Actionsheet = ActionsheetNew as IActionsheetComponentType<
  typeof AccessibleActionsheet,
  typeof AccessibleActionsheet.Content,
  typeof Button
>;
