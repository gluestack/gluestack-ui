import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';

import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  Icon,
  FlatList,
  ScrollView,
  SectionHeaderText,
  SectionList,
  VirtualizedList,
} from './styled-components-actionsheet';

import {
  Root as StyledSelectRoot,
  Trigger as StyledSelectTrigger,
  Input as StyledSelectInput,
  Icon as StyledSelectIcon,
} from './styled-components';
import { forwardRef } from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';
import React from 'react';
import { GenericComponentType } from '../../types';
import { ChevronDownIcon } from '../Icons';

const AccessibleActionsheet = createActionsheet({
  Root,
  Backdrop,
  Content,
  DragIndicator,
  IndicatorWrapper,
  Item,
  ItemText,
  Icon,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  // @ts-ignore
  AnimatePresence: Content.AnimatePresence,
});

const AccessibleSelect = createSelect(
  {
    Root: StyledSelectRoot,
    Trigger: StyledSelectTrigger,
    Input: StyledSelectInput,
    Icon: StyledSelectIcon,
  },
  {
    Portal: AccessibleActionsheet,
    Backdrop: AccessibleActionsheet.Backdrop,
    Content: AccessibleActionsheet.Content,
    DragIndicator: AccessibleActionsheet.DragIndicator,
    DragIndicatorWrapper: AccessibleActionsheet.DragIndicatorWrapper,
    Item: AccessibleActionsheet.Item,
    ItemText: AccessibleActionsheet.ItemText,
    ScrollView: AccessibleActionsheet.ScrollView,
    VirtualizedList: AccessibleActionsheet.VirtualizedList,
    FlatList: AccessibleActionsheet.FlatList,
    SectionList: AccessibleActionsheet.SectionList,
    SectionHeaderText: AccessibleActionsheet.SectionHeaderText,
  }
);

const NewSelect = forwardRef(
  (
    {
      children,
      isLoading,
      isDisabled,
      // isLoadingText,
      colorScheme = 'primary',
      variant = 'solid',
      _onClose,
      ...props
    }: any,
    ref?: any
  ) => {
    const resolvedPropForGluestack = usePropResolution(props);
    return (
      <AccessibleSelect
        colorScheme={colorScheme}
        variant={variant}
        {...resolvedPropForGluestack}
        ref={ref}
        isDisabled={isLoading || isDisabled}
      >
        <AccessibleSelect.Trigger variant="outline" size="md">
          <AccessibleSelect.Input placeholder="Select option" />
          <AccessibleSelect.Icon mr="$3">
            <Icon as={ChevronDownIcon} />
          </AccessibleSelect.Icon>
        </AccessibleSelect.Trigger>

        <AccessibleSelect.Portal>
          <AccessibleSelect.Backdrop />
          <AccessibleSelect.Content>
            {/* <AccessibleSelect.DragIndicatorWrapper>
              <AccessibleSelect.DragIndicator />
            </AccessibleSelect.DragIndicatorWrapper> */}
            {children}
          </AccessibleSelect.Content>
        </AccessibleSelect.Portal>
        {/* <AccessibleSelect.Backdrop onPress={onClose} /> */}

        {/* {children} */}
      </AccessibleSelect>
    );
  }
);

const AccessibleSelectItem = forwardRef(
  ({ children, ...props }: any, ref?: any) => {
    return (
      <AccessibleSelect.Item {...props} ref={ref}>
        <AccessibleSelect.ItemText>{children}</AccessibleSelect.ItemText>
      </AccessibleSelect.Item>
    );
  }
);

const SelectNew = NewSelect as any;
SelectNew.Item = AccessibleSelectItem;

export type ISelectComponentType<Select, Item> =
  GenericComponentType<Select> & {
    Item: GenericComponentType<Item>;
  };

export const Select = SelectNew as ISelectComponentType<
  typeof AccessibleSelect,
  typeof AccessibleSelect.Item
>;
