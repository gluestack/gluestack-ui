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
    const { hideDragIndicator } = useContext(ActionSheetContext);
    const resolvedProps = usePropResolution(props);
    const resolvedPropsForDragIndicator = usePropResolution(_dragIndicator);
    const resolvedPropsForDragIndicatorWrapper = usePropResolution(
      _dragIndicatorWrapper
    );
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
  ({ children, ...props }: any, ref?: any) => {
    return (
      <Button variant="actionsheetStyle" {...props} ref={ref}>
        {children}
      </Button>
    );
  }
);

const ActionsheetNew = NewActionsheet as any;
ActionsheetNew.Content = AccessibleActionsheetContent;
ActionsheetNew.Item = AccessibleActionsheetItem;

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
