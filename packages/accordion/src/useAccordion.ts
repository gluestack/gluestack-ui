import { useState, useEffect } from 'react';
import { Collection } from './types';

type Props = {
  type: 'single' | 'multiple';
  isDisabledAccordion: boolean;
  isCollapsible: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: any) => void;
};

export const useAccordion = (props: Props) => {
  const {
    type,
    isDisabledAccordion,
    isCollapsible,
    value,
    defaultValue,
    onValueChange,
  } = props;

  const [collection, setCollection] = useState<Collection>(new Map());

  useEffect(() => {
    if (value) {
      if (type === 'single' && typeof value === 'string') {
        setCollection((prevCollection) => {
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            if (key === value) {
              item.isExpanded = true;
            } else {
              item.isExpanded = false;
            }
            updatedMap.set(key, item);
          });

          return updatedMap;
        });
      } else if (type === 'multiple' && Array.isArray(value)) {
        setCollection((prevCollection) => {
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            if ((value as string[]).includes(key)) {
              item.isExpanded = true;
            } else {
              item.isExpanded = false;
            }
            updatedMap.set(key, item);
          });
          return updatedMap;
        });
      }
    } else {
      if (defaultValue) {
        if (type === 'single' && typeof defaultValue === 'string') {
          setCollection((prevCollection) => {
            const updatedMap = new Map();
            prevCollection.forEach((item, key) => {
              if (key === defaultValue) {
                item.isExpanded = true;
              } else {
                item.isExpanded = false;
              }
              updatedMap.set(key, item);
            });
            return updatedMap;
          });
        } else if (type === 'multiple' && Array.isArray(defaultValue)) {
          setCollection((prevCollection) => {
            const updatedMap = new Map();
            prevCollection.forEach((item, key) => {
              if ((defaultValue as string[]).includes(key)) {
                item.isExpanded = true;
              } else {
                item.isExpanded = false;
              }
              updatedMap.set(key, item);
            });
            return updatedMap;
          });
        }
      } else {
        setCollection((prevCollection) => {
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            item.isExpanded = false;
            updatedMap.set(key, item);
          });
          return updatedMap;
        });
      }
    }
  }, [type, value, defaultValue, setCollection]);

  useEffect(() => {
    if (onValueChange) {
      if (type === 'single') {
        const item = Array.from(collection.values()).find(
          (accordionItem) => accordionItem.isExpanded
        );
        if (item) {
          onValueChange(item.key);
        }
      } else if (type === 'multiple') {
        const items = Array.from(collection.values())
          .filter((item) => item.isExpanded)
          .map((item) => item.key);
        onValueChange(items);
      }
    }
  }, [onValueChange, collection, type]);

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
      setCollection((prevCollection) =>
        prevCollection.set(key, { key, isExpanded, isDisabled })
      );
    }
  };

  const toggleItem = (itemValue: string, isDisabled = false) => {
    if (isDisabled || !itemValue) return;

    if (isDisabledAccordion && isDisabled) return;

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
          const updatedMap = new Map();
          prevCollection.forEach((item, key) => {
            if (key === itemValue) {
              item.isExpanded = !item.isExpanded;
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
            }
            updatedMap.set(key, item);
          });
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
