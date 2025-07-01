import { createContext } from 'react';

interface ILayoutContext {
    isOpenSidebar: boolean;
    setIsOpenSidebar: (isOpen: boolean) => void;
}

export const LayoutContext = createContext<ILayoutContext>({
    isOpenSidebar: false,
    setIsOpenSidebar: () => {},
});