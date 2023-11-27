import { useEffect, useId, useState } from 'react';

export const useAccordionItem = (state: any, props: any) => {
  const regionId = useId();
  const buttonId = useId();
  const { insertItem, toggleItem } = state as any;
  const { value, isDisabled = false } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    insertItem({ key: value, isExpanded, isDisabled });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const accordionItem = state.collection.find(
      (item: any) => item.key === value
    );

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
      'id': buttonId,
      'aria-controls': regionId,
      'aria-disabled': isDisabled,
      'aria-expanded': isExpanded,
      'onPress': toggle,
      'role': 'button',
      'isExpanded': isExpanded,
    },
  };
};
