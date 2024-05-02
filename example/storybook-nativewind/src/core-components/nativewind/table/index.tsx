import React, { createContext, useMemo, useContext } from 'react';
import {
  Table as ExpoTable,
  THead as ExpoTHead,
  TBody as ExpoTBody,
  TFoot as ExpoTFoot,
  TR as ExpoTR,
  Caption as ExpoTCaption,
} from '@expo/html-elements';
import {
  tableStyle,
  tableHeaderStyle,
  tableBodyStyle,
  tableFooterStyle,
  tableHeadStyle,
  tableRowStyleStyle,
  tableDataStyle,
  tableCaptionStyle,
} from './styles';
import { Text } from 'react-native';

const TableHeaderContext = createContext<any>({});
const TableFooterContext = createContext<any>({});

const Table = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTable
      ref={ref}
      className={tableStyle({ class: className })}
      {...props}
    />
  );
});

const TableHeader = React.forwardRef(({ className, ...props }: any, ref) => {
  const contextValue = useMemo(() => {
    return {
      isHeaderRow: true,
    };
  }, []);
  return (
    <TableHeaderContext.Provider value={contextValue}>
      <ExpoTHead
        ref={ref}
        className={tableHeaderStyle({ class: className })}
        {...props}
      />
    </TableHeaderContext.Provider>
  );
});

const TableBody = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTBody
      ref={ref}
      className={tableBodyStyle({ class: className })}
      {...props}
    />
  );
});

const TableFooter = React.forwardRef(({ className, ...props }: any, ref) => {
  const contextValue = useMemo(() => {
    return {
      isFooterRow: true,
    };
  }, []);
  return (
    <TableFooterContext.Provider value={contextValue}>
      <ExpoTFoot
        ref={ref}
        className={tableFooterStyle({ class: className })}
        {...props}
      />
    </TableFooterContext.Provider>
  );
});

const TableHead = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <Text
      ref={ref}
      className={tableHeadStyle({ class: className })}
      {...props}
    />
  );
});

const TableRow = React.forwardRef(({ className, ...props }: any, ref) => {
  const { isHeaderRow } = useContext(TableHeaderContext);
  const { isFooterRow } = useContext(TableFooterContext);

  return (
    <ExpoTR
      ref={ref}
      className={tableRowStyleStyle({
        isHeaderRow,
        isFooterRow,
        class: className,
      })}
      {...props}
    />
  );
});

const TableData = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <Text
      ref={ref}
      className={tableDataStyle({ class: className })}
      {...props}
    />
  );
});

const TableCaption = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTCaption
      ref={ref}
      className={tableCaptionStyle({ class: className })}
      {...props}
    />
  );
});

Table.displayName = 'Table';
TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableFooter.displayName = 'TableFooter';
TableHead.displayName = 'TableHead';
TableRow.displayName = 'TableRow';
TableData.displayName = 'TableData';
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableData,
  TableCaption,
};
