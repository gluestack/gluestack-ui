'use client';
import { createContext, useState } from 'react';
import { config } from '../../../../core-components/nativewind/gluestack-ui-provider/config';
import React from 'react';

export const ThemeContext = createContext<any>({});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [value, setValue] = useState(config.light);

  const updateValue = (newValue: any) => {
    // console.log("updating value", newValue);
    setValue(newValue);
  };

  return (
    <ThemeContext.Provider value={{ value, updateValue }}>
      {children}
    </ThemeContext.Provider>
  );
}
