import { State } from './types';

type Props = {
  value: string;
  isExpanded: boolean;
  isDisabled: boolean;
};

export const useAccordionItem = (state: State, props: Props) => {
  const { toggleItem } = state;
  const { value, isExpanded, isDisabled } = props;

  // Generate unique IDs for each accordion trigger and region
  const buttonId = `accordion-button-${value}`;
  const regionId = `accordion-region-${value}`;

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
    },
    isExpanded,
  };
};
