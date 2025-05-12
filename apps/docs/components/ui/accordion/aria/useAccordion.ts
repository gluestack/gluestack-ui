type Props = {
  type: 'single' | 'multiple';
  isCollapsible: boolean;
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
};

export const useAccordion = (props: Props) => {
  const { type, isCollapsible, selectedValues, setSelectedValues } = props;

  /*
   * The toggleItem function is responsible for updating the selected values
   * based on the type of accordion (single or multiple) and whether or not
   * the accordion is collapsible.
   */
  const toggleItem = (itemValue: string, isDisabled = false) => {
    if (isDisabled || !itemValue) return;

    if (type === 'single') {
      if (isCollapsible) {
        if (selectedValues.includes(itemValue)) {
          setSelectedValues([]);
        } else {
          setSelectedValues([itemValue]);
        }
      } else {
        if (selectedValues.includes(itemValue)) return;
        setSelectedValues([itemValue]);
      }
    } else {
      if (isCollapsible) {
        if (selectedValues.includes(itemValue)) {
          setSelectedValues(selectedValues.filter((v) => v !== itemValue));
        } else {
          setSelectedValues([...selectedValues, itemValue]);
        }
      } else {
        if (selectedValues.includes(itemValue)) return;
        setSelectedValues([...selectedValues, itemValue]);
      }
    }
  };

  return {
    state: {
      selectedValues,
      toggleItem,
    },
  };
};
