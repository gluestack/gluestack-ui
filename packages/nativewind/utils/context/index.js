'use client';
import { createContext, useContext } from 'react';
export const ParentContext = createContext({});
export const useParentContext = () => {
    return useContext(ParentContext);
};
