import { createContext } from 'react';

interface ILayoutContext {
  isOpenSidebar: boolean;
  setIsOpenSidebar: any;
  headerItems: any;
  sidebarItems: Array<any>;
  version: string;
  colorMode: string | null | undefined;
  toggleColorMode: any;
  Link: any;
  Image: any;
  router: any;
  breadcrumbs: any;
  Docsearch: any;
  setSidebarItems: any;
}

export const LayoutContext = createContext<ILayoutContext>({
  isOpenSidebar: false,
  setIsOpenSidebar: () => {},
  headerItems: [],
  sidebarItems: [],
  version: '',
  colorMode: 'light',
  toggleColorMode: () => {},
  Link: null,
  Image: null,
  router: null,
  breadcrumbs: null,
  Docsearch: null,
  setSidebarItems: () => {},
  // selectedHeading: 'Introduction',
});
