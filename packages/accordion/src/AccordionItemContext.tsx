import React, { createContext, useContext } from 'react';

interface Props {
  children?: React.ReactNode;
}

const AccordionItemContext = createContext<any>(undefined);

export const AccordionItemProvider: React.FC<Props> = ({ children }: Props) => {
  let idCounter = 0;

  function uniqueId() {
    const id = ++idCounter;
    return id;
  }

  const itemIndex = uniqueId();
  const context = {
    itemIndex,
  };

  return (
    <AccordionItemContext.Provider value={context}>
      {children}
    </AccordionItemContext.Provider>
  );
};

// Custom hook to access the context
export const useAccordionItemContext = (): any => {
  const context = useContext(AccordionItemContext);

  if (!context) {
    throw new Error(
      'useAccordionItemContext must be used within an AccordionItemProvider'
    );
  }

  return context;
};
