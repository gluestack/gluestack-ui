import React from 'react';
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

const NewActionsheet = forwardRef(
  (
    {
      children,
      isLoading,
      isDisabled,
      // isLoadingText,
      colorScheme = 'primary',
      variant = 'solid',
      onClose,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleActionsheet
        colorScheme={colorScheme}
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
        isDisabled={isLoading || isDisabled}
      >
        <AccessibleActionsheet.Backdrop onPress={onClose} />

        {children}
      </AccessibleActionsheet>
    );
  }
);

const AccessibleActionsheetContent = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleActionsheet.Content {...props} ref={ref}>
        {/* {!hideDragIndicator ? (
          <AccessibleActionsheet.DragIndicatorWrapper>
            <AccessibleActionsheet.DragIndicator />
          </AccessibleActionsheet.DragIndicatorWrapper>
        ) : null} */}
        <AccessibleActionsheet.DragIndicatorWrapper>
          <AccessibleActionsheet.DragIndicator />
        </AccessibleActionsheet.DragIndicatorWrapper>

        {children}
      </AccessibleActionsheet.Content>
    );
  }
);

const AccessibleActionsheetItem = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleActionsheet.Item {...props} ref={ref}>
        <AccessibleActionsheet.ItemText>
          {children}
        </AccessibleActionsheet.ItemText>
      </AccessibleActionsheet.Item>
    );
  }
);

const ActionsheetNew = NewActionsheet as any;
ActionsheetNew.Content = AccessibleActionsheetContent;
// ActionsheetNew.Body = AccessibleActionsheetBody;
ActionsheetNew.Item = AccessibleActionsheetItem;

export type IActionsheetComponentType<Actionsheet, Content, Item> =
  GenericComponentType<Actionsheet> & {
    Content: GenericComponentType<Content>;
    Item: GenericComponentType<Item>;
  };

export const Actionsheet = ActionsheetNew as IActionsheetComponentType<
  typeof AccessibleActionsheet,
  typeof AccessibleActionsheet.Content,
  typeof AccessibleActionsheet.Item
>;
