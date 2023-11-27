import { useState, useEffect } from 'react';
import { Collection } from './hookTypes';

type Props = {
  type: 'single' | 'multiple';
  isDisabledAccordion: boolean;
  isCollapsible: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: Collection) => void;
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

  const [collection, setCollection] = useState<Collection>([]);

  useEffect(() => {
    if (value) {
      if (type === 'single' && typeof value === 'string') {
        setCollection((prevCollection) =>
          prevCollection.map((item) => {
            if (item.key === value) {
              item.isExpanded = true;
            } else {
              item.isExpanded = false;
            }
            return item;
          })
        );
      } else if (type === 'multiple' && Array.isArray(value)) {
        setCollection((prevCollection) =>
          prevCollection.map((item) => {
            if ((value as string[]).includes(item.key)) {
              item.isExpanded = true;
            } else {
              item.isExpanded = false;
            }
            return item;
          })
        );
      }
    } else {
      setCollection((prevCollection) =>
        prevCollection.map((item) => {
          item.isExpanded = false;
          return item;
        })
      );
    }
    if (!value) {
      if (defaultValue) {
        if (type === 'single' && typeof defaultValue === 'string') {
          setCollection((prevCollection) =>
            prevCollection.map((item) => {
              if (item.key === defaultValue) {
                item.isExpanded = true;
              } else {
                item.isExpanded = false;
              }
              return item;
            })
          );
        } else if (type === 'multiple' && Array.isArray(defaultValue)) {
          setCollection((prevCollection) =>
            prevCollection.map((item) => {
              if ((defaultValue as string[]).includes(item.key)) {
                item.isExpanded = true;
              } else {
                item.isExpanded = false;
              }
              return item;
            })
          );
        }
      } else {
        setCollection((prevCollection) =>
          prevCollection.map((item) => {
            item.isExpanded = false;
            return item;
          })
        );
      }
    }
  }, [type, value, defaultValue, setCollection]);

  useEffect(() => {
    if (onValueChange) {
      onValueChange(collection);
    }
  }, [onValueChange, collection]);

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
        const isItemAlreadyInCollection = prevCollection.some(
          (item) => item.key === key
        );

        return isItemAlreadyInCollection
          ? prevCollection
          : [...prevCollection, { key, isExpanded, isDisabled }];
      });
    }
  };

  const toggleItem = (itemValue: string, isDisabled = false) => {
    if (isDisabled || !itemValue) {
      return;
    }
    if (isDisabledAccordion && isDisabled) {
      return;
    }
    if (type === 'single') {
      if (isCollapsible) {
        const newCollection = collection.map((item) => {
          if (item.key === itemValue) {
            item.isExpanded = !item.isExpanded;
          } else {
            item.isExpanded = false;
          }
          return item;
        });
        setCollection(newCollection);
      } else {
        const newCollection = collection.map((item) => {
          if (item.key === itemValue && !item.isExpanded) {
            item.isExpanded = true;
          } else if (item.key !== itemValue) {
            item.isExpanded = false;
          }
          return item;
        });
        setCollection(newCollection);
      }
    } else {
      if (isCollapsible) {
        const newCollection = collection.map((item) => {
          if (item.key === itemValue) {
            item.isExpanded = !item.isExpanded;
          }
          return item;
        });
        setCollection(newCollection);
      } else {
        const newCollection = collection.map((item) => {
          if (item.key === itemValue && !item.isExpanded) {
            item.isExpanded = true;
          }
          return item;
        });
        setCollection(newCollection);
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
