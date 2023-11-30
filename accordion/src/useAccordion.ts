import { useState } from 'react';
import { Collection } from './hookTypes';

type Props = {
  type: 'single' | 'multiple';
  isCollapsible: boolean;
  selectedValues: string[] | [];
  setSelectedValues: (values: string[]) => void;
};

export const useAccordion = (props: Props) => {
  const { type, isCollapsible, selectedValues, setSelectedValues } = props;

  const [collection, setCollection] = useState<Collection>(new Map());

  // Function to insert an item into the collection
  const insertItem = ({
    key,
    isExpanded,
    isDisabled,
  }: {
    key: string;
    isExpanded: boolean;
    isDisabled: boolean;
  }) => {
    if (key) {
      setCollection((prevCollection) => {
        const updatedMap = new Map(
          prevCollection.set(key, { key, isExpanded, isDisabled })
        );
        return updatedMap;
      });
    }
  };

  // Function to toggle an item in the collection based on the type of accordion updating the selected values and the collection
  const toggleItem = (itemValue: string, isDisabled = false) => {
    if (isDisabled || !itemValue) return;

    if (type === 'single') {
      if (isCollapsible) {
        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);

          selectedValues.forEach((value) => {
            const tempItem = prevCollection.get(value);

            if (tempItem) {
              tempItem.isExpanded = false;
              updatedMap.set(value, tempItem);
            }
          });

          if (!selectedValues.includes(itemValue)) {
            if (prevCollection.has(itemValue)) {
              const tempItem = prevCollection.get(itemValue);

              if (tempItem) {
                tempItem.isExpanded = true;
                updatedMap.set(itemValue, tempItem);
              }
            }
          }

          return updatedMap;
        });

        if (selectedValues.includes(itemValue)) {
          setSelectedValues([]);
        } else {
          setSelectedValues([itemValue]);
        }
      } else {
        if (selectedValues.includes(itemValue)) return;

        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);

          selectedValues.forEach((value) => {
            const tempItem = prevCollection.get(value);
            if (tempItem) {
              tempItem.isExpanded = false;
              updatedMap.set(value, tempItem);
            }
          });

          if (prevCollection.has(itemValue)) {
            const tempItem = prevCollection.get(itemValue);
            if (tempItem) {
              tempItem.isExpanded = true;
              updatedMap.set(itemValue, tempItem);
            }
          }

          setSelectedValues([itemValue]);

          return updatedMap;
        });
      }
    } else {
      if (isCollapsible) {
        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);
          if (prevCollection.has(itemValue)) {
            const tempItem = prevCollection.get(itemValue);
            if (tempItem) {
              tempItem.isExpanded = !tempItem.isExpanded;
              updatedMap.set(itemValue, tempItem);
            }
          }
          return updatedMap;
        });
        if (selectedValues.includes(itemValue)) {
          setSelectedValues(selectedValues.filter((v) => v !== itemValue));
        } else {
          setSelectedValues([...selectedValues, itemValue]);
        }
      } else {
        if (selectedValues.includes(itemValue)) return;
        setSelectedValues([...selectedValues, itemValue]);
        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);
          if (prevCollection.has(itemValue)) {
            const tempItem = prevCollection.get(itemValue);
            if (tempItem) {
              tempItem.isExpanded = true;
              updatedMap.set(itemValue, tempItem);
            }
          }
          return updatedMap;
        });
      }
    }
  };

  return {
    state: {
      collection,
      insertItem,
      toggleItem,
    },
  };
};
