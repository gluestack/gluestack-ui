import { useState, useEffect } from 'react';

export const useAccordion = (props: any) => {
  const {
    type,
    isDisabledAccordion,
    isCollapsible,
    value,
    defaultValue,
    onValueChange,
  } = props;

  const [collection, setCollection] = useState<any>([]);

  useEffect(() => {
    if (value) {
      if (type === 'single' && typeof value === 'string') {
        setCollection((prevCollection: any) =>
          prevCollection.map((item: any) => {
            if (item.key === value) {
              item.isExpanded = true;
            } else {
              item.isExpanded = false;
            }
            return item;
          })
        );
      } else if (type === 'multiple' && Array.isArray(value)) {
        setCollection((prevCollection: any) =>
          prevCollection.map((item: any) => {
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
      setCollection((prevCollection: any) =>
        prevCollection.map((item: any) => {
          item.isExpanded = false;
          return item;
        })
      );
    }
    if (!value) {
      if (defaultValue) {
        if (type === 'single' && typeof defaultValue === 'string') {
          setCollection((prevCollection: any) =>
            prevCollection.map((item: any) => {
              if (item.key === defaultValue) {
                item.isExpanded = true;
              } else {
                item.isExpanded = false;
              }
              return item;
            })
          );
        } else if (type === 'multiple' && Array.isArray(defaultValue)) {
          setCollection((prevCollection: any) =>
            prevCollection.map((item: any) => {
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
        setCollection((prevCollection: any) =>
          prevCollection.map((item: any) => {
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
      setCollection((prevCollection: any) => {
        const isItemAlreadyInCollection = prevCollection.some(
          (item: any) => item.key === key
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
        const newCollection = collection.map((item: any) => {
          if (item.key === itemValue) {
            item.isExpanded = !item.isExpanded;
          } else {
            item.isExpanded = false;
          }
          return item;
        });
        setCollection(newCollection);
      } else {
        const newCollection = collection.map((item: any) => {
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
        const newCollection = collection.map((item: any) => {
          if (item.key === itemValue) {
            item.isExpanded = !item.isExpanded;
          }
          return item;
        });
        setCollection(newCollection);
      } else {
        const newCollection = collection.map((item: any) => {
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
