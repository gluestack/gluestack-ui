import { useEffect, useState } from 'react';
import { State } from './types';

type Props = {
  value: string;
  isDisabled: boolean;
  isExpanded: boolean;
  handleToggle: (value: string) => void;
};

export const useAccordionItem = (state: State, props: Props) => {
  const { insertItem, toggleItem } = state;
  const { value, isExpanded, isDisabled, handleToggle } = props;

  const [expanded, setExpanded] = useState(false);

  // Generate unique IDs for each accordion trigger and region
  const buttonId = `accordion-button-${value}`;
  const regionId = `accordion-region-${value}`;

  // Insert the item into the collection on mount
  useEffect(() => {
    insertItem({ key: value, isExpanded, isDisabled });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update the expanded state when the collection changes
  useEffect(() => {
    const accordionItem = state.collection.get(value);

    if (!accordionItem) return;

    setExpanded(accordionItem.isExpanded);
  }, [state.collection, value]);

  // Toggle the item in the collection and call the toggle callback
  const toggle = () => {
    toggleItem(value, isDisabled);
    handleToggle(value);
  };

  return {
    regionProps: {
      'id': regionId,
      'aria-labelledby': buttonId,
      'role': 'region',
    },
    buttonProps: {
      'aria-controls': regionId,
      'aria-disabled': isDisabled,
      'aria-expanded': expanded,
      'onPress': toggle,
      'role': 'button',
    },
  };
};
