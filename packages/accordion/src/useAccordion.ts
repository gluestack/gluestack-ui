import { useState } from 'react';
import { Collection } from './types';

type Props = {
  type: 'single' | 'multiple';
  isCollapsible: boolean;
};

export const useAccordion = (props: Props) => {
  const { type, isCollapsible } = props;

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

  // Function to toggle an item in the collection based on the type of accordion
  const toggleItem = (itemValue: string, isDisabled = false) => {
    if (isDisabled || !itemValue) return;

    if (type === 'single') {
      if (isCollapsible) {
        setCollection((prevCollection) => {
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            if (key === itemValue) {
              item.isExpanded = !item.isExpanded;
            } else {
              item.isExpanded = false;
            }
            updatedMap.set(key, item);
          });
          return updatedMap;
        });
      } else {
        setCollection((prevCollection) => {
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            if (key === itemValue && !item.isExpanded) {
              item.isExpanded = true;
            } else if (key !== itemValue) {
              item.isExpanded = false;
            }
            updatedMap.set(key, item);
          });
          return updatedMap;
        });
      }
    } else {
      if (isCollapsible) {
        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);
          if (updatedMap.has(itemValue)) {
            const tempItem = updatedMap.get(itemValue);

            if (tempItem) {
              tempItem.isExpanded = !tempItem.isExpanded;
              updatedMap.set(itemValue, tempItem);
            }
          }
          return updatedMap;
        });
      } else {
        setCollection((prevCollection) => {
          const updatedMap = new Map(prevCollection);
          if (updatedMap.has(itemValue)) {
            const tempItem = updatedMap.get(itemValue);

            if (tempItem && !tempItem.isExpanded) {
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
