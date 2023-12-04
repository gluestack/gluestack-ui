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
import { createContext, forwardRef, useContext, useState } from 'react';
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

const SelectContext = createContext<any>({});

const NewSelect = forwardRef(
  (
    {
      children,

      placeholder,
      color,
      placeholderTextColor,
      //
      _item,
      _selectedItem,
      _actionSheet,
      _actionSheetContent,
      _actionSheetBody,
      //
      selectedValue,
      defaultValue,
      onValueChange,

      isInvalid,
      isDisabled,
      isHovered,
      isFocused,
      isFocusVisible,

      dropdownIcon,
      dropdownOpenIcon,
      dropdownCloseIcon,

      onOpen,
      onClose,

      wrapperRef,

      variant,

      ...props
    }: any,
    ref?: any
  ) => {
    const contextValue = { itemProps: _item, selectedItemProp: _selectedItem };
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
      setIsOpen(true);
      if (onOpen) onOpen();
    };
    const handleClose = () => {
      setIsOpen(false);
      if (onClose) onClose();
    };
    const resolvedPropForGluestack = usePropResolution(props);
    let inputStyle = {};
    if (placeholderTextColor)
      inputStyle = {
        props: { placeholderTextColor: `$${placeholderTextColor}` },
      };
    return (
      <AccessibleSelect
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        selectedValue={selectedValue}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isHovered={isHovered}
        isFocused={isFocused}
        isFocusVisible={isFocusVisible}
        onOpen={handleOpen}
        onClose={handleClose}
        {...resolvedPropForGluestack}
        ref={wrapperRef}
      >
        <AccessibleSelect.Trigger>
          <AccessibleSelect.Input
            variant={variant}
            color={`${color}`}
            sx={inputStyle}
            placeholder={placeholder}
            ref={ref}
          />
          <AccessibleSelect.Icon>
            {isOpen
              ? dropdownOpenIcon ??
                dropdownIcon ?? <Icon as={ChevronDownIcon} />
              : dropdownCloseIcon ??
                dropdownIcon ?? <Icon as={ChevronDownIcon} />}
          </AccessibleSelect.Icon>
        </AccessibleSelect.Trigger>

        <AccessibleSelect.Portal>
          <AccessibleSelect.Backdrop onPress={handleClose} />
          <AccessibleSelect.Content {..._actionSheetContent}>
            <AccessibleSelect.DragIndicatorWrapper>
              <AccessibleSelect.DragIndicator />
            </AccessibleSelect.DragIndicatorWrapper>
            <SelectContext.Provider value={contextValue}>
              {children}
            </SelectContext.Provider>
          </AccessibleSelect.Content>
        </AccessibleSelect.Portal>
      </AccessibleSelect>
    );
  }
);

export const AccessibleSelectIte = forwardRef(
  ({ children, label, value, ...props }: any, ref?: any) => {
    const {
      itemProps,
      // selectedItemProp
      // TODO: this will be incorporated later
    } = useContext(SelectContext);
    return (
      <AccessibleSelect.Item
        label={label}
        value={value}
        {...itemProps}
        {...props}
        ref={ref}
      >
        <AccessibleSelect.ItemText>{children}</AccessibleSelect.ItemText>
      </AccessibleSelect.Item>
    );
  }
);

const AccessibleSelectItem = forwardRef(
  ({ children, label, value, ...props }: any, ref?: any) => {
    const {
      itemProps,
      // selectedItemProp
      // TODO: this will be incorporated later
    } = useContext(SelectContext);
    return (
      <AccessibleSelect.Item
        label={label}
        value={value}
        {...itemProps}
        {...props}
        ref={ref}
      >
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
