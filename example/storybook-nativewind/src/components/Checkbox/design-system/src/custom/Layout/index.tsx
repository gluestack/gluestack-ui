// import { LayoutContent } from './LayoutContent';
// import { LayoutHeader } from './LayoutHeader';
// import { LayoutSidebar } from './LayoutSidebar';
// import { Layout as LayoutMain } from './Layout';
// import type { MutableRefObject } from 'react';

// export type ILayoutComponentType = ((
//   props: any & { ref?: MutableRefObject<any> }
// ) => JSX.Element) & {
//   Content: React.MemoExoticComponent<
//     (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
//   >;
//   Header: React.MemoExoticComponent<
//     (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
//   >;
//   Sidebar: React.MemoExoticComponent<
//     (props: any & { ref?: MutableRefObject<any> }) => JSX.Element
//   >;
// };

// const LayoutTemp = LayoutMain as any;
// LayoutTemp.Content = LayoutContent;
// LayoutTemp.Header = LayoutHeader;
// LayoutTemp.Sidebar = LayoutSidebar;

// const Layout = LayoutTemp as ILayoutComponentType;

// export { Layout };

export { Layout } from './Layout';
export { LayoutContext } from './LayoutContext';
