import React, { createContext, useContext, useState } from 'react';

interface Props {
  children?: React.ReactNode;
}

const AccordionContext = createContext<any>(undefined);

// Accordion Provider
export const AccordionProvider: React.FC<Props> = ({ children }: Props) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [type, setType] = useState<string>('single');
  const [isCollapsible, setIsCollapsible] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  // const [accordionValue, setAccordionValue] = useState<string>('');

  const toggleItem = (
    type: string,
    isCollapsible: boolean,
    isDisabled: boolean,
    accordionValue: string
  ) => {
    if (isDisabled === true) return;

    if (type === 'single') {
      if (isCollapsible) {
        setOpenItems((prevOpenItems: string[]) => {
          const isItemAlreadyOpen = prevOpenItems.includes(accordionValue);
          return isItemAlreadyOpen
            ? prevOpenItems.filter((index) => index !== accordionValue)
            : [accordionValue];
        });
      } else {
        //do not toggle if not collapsible
        setOpenItems((prevOpenItems: string[]) => {
          const isItemAlreadyOpen = prevOpenItems.includes(accordionValue);
          return isItemAlreadyOpen ? prevOpenItems : [accordionValue];
        });
      }
    } else {
      setOpenItems((prevOpenItems: string[]) => {
        const isItemAlreadyOpen = prevOpenItems.includes(accordionValue);
        return isItemAlreadyOpen
          ? prevOpenItems.filter((index) => index !== accordionValue)
          : [...prevOpenItems, accordionValue];
      });
    }
  };

  const contextValue = {
    openItems,
    toggleItem,
    setType,
    setIsCollapsible,
    type,
    isCollapsible,
    isDisabled,
    setIsDisabled,
    // accordionValue,
    // setAccordionValue,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      {children}
    </AccordionContext.Provider>
  );
};

// Custom hook to access the context
export const useAccordionContext = (): any => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error(
      'useAccordionContext must be used within an AccordionProvider'
    );
  }

  return context;
};
