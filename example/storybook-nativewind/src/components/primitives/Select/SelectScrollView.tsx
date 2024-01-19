import React, { useCallback, useMemo } from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectScrollView,
  SelectTrigger,
  Icon,
} from '@custom-ui/themed';

const SelectWithScrollView = ({ isDisabled, isInvalid, ...props }: any) => {
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => <SelectItem label={item} value={item} />,
    []
  );

  return (
    <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
      <SelectTrigger>
        <SelectInput placeholder="Select option" />
        {/* @ts-ignore */}
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectScrollView>{data.map(renderItem)}</SelectScrollView>
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

SelectWithScrollView.displayName =
  'SelectWithScrollView is an example of how to use Select with list that uses ScrollView on native';

export default SelectWithScrollView;

export { Center, Select, Icon, ChevronDownIcon };
