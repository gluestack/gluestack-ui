import { useEffect, useState } from 'react';
import { State } from './hookTypes';

type Props = {
  value: string;
  isDisabled?: boolean;
};

export const useAccordionItem = (state: State, props: Props) => {
  const { insertItem, toggleItem } = state;
  const { value, isDisabled = false } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const buttonId = `accordion-button-${value}`;
  const regionId = `accordion-region-${value}`;

  useEffect(() => {
    insertItem({ key: value, isExpanded, isDisabled });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const accordionItem = state.collection.find((item) => item.key === value);

    if (!accordionItem) return;

    setIsExpanded(accordionItem.isExpanded);
  }, [state.collection, value]);

  const toggle = () => {
    toggleItem(value, isDisabled);
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
      'aria-expanded': isExpanded,
      'onPress': toggle,
      'role': 'button',
      'isExpanded': isExpanded,
    },
  };
};
