type Props = {
  type: 'single' | 'multiple';
  isCollapsible: boolean;
  selectedValues: string[];
  setSelectedValues: (values: string[]) => void;
};

export const useAccordion = (props: Props) => {
  const { type, isCollapsible, selectedValues, setSelectedValues } = props;

  // Function to insert an item into the collection

  // Function to toggle an item in the collection based on the type of accordion updating the selected values and the collection
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
