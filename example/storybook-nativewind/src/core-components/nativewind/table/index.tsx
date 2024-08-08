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
import { Text, View } from 'react-native';

const TableHeaderContext = createContext<any>({});
const TableFooterContext = createContext<any>({});

type ITableProps = React.ComponentProps<typeof ExpoTable>;
type ITableHeaderProps = React.ComponentProps<typeof ExpoTHead>;
type ITableBodyProps = React.ComponentProps<typeof ExpoTBody>;
type ITableFooterProps = React.ComponentProps<typeof ExpoTFoot>;
type ITableHeadProps = React.ComponentProps<typeof View | typeof Text> & {
  useRNView?: boolean;
};
type ITableRowProps = React.ComponentProps<typeof ExpoTR>;
type ITableDataProps = React.ComponentProps<typeof View | typeof Text> & {
  useRNView?: boolean;
};
type ITableCaptionProps = React.ComponentProps<typeof ExpoTCaption>;

const Table = React.forwardRef<React.ElementRef<typeof ExpoTable>, ITableProps>(
  ({ className, ...props }, ref) => {
    return (
      <ExpoTable
        ref={ref}
        className={tableStyle({ class: className })}
        {...props}
      />
    );
  }
);

const TableHeader = React.forwardRef<
  React.ElementRef<typeof ExpoTHead>,
  ITableHeaderProps
>(({ className, ...props }, ref) => {
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

const TableBody = React.forwardRef<
  React.ElementRef<typeof ExpoTBody>,
  ITableBodyProps
>(({ className, ...props }, ref) => {
  return (
    <ExpoTBody
      ref={ref}
      className={tableBodyStyle({ class: className })}
      {...props}
    />
  );
});

const TableFooter = React.forwardRef<
  React.ElementRef<typeof ExpoTFoot>,
  ITableFooterProps
>(({ className, ...props }, ref) => {
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

const TableHead = React.forwardRef<
  React.ElementRef<typeof View | typeof Text>,
  ITableHeadProps
>(({ useRNView = false, className, ...props }, ref) => {
  if (useRNView) {
    return (
      <View
        ref={ref}
        className={tableHeadStyle({ class: className })}
        {...props}
      />
    );
  } else {
    return (
      <Text
        ref={ref}
        className={tableHeadStyle({ class: className })}
        {...props}
      />
    );
  }
});

const TableRow = React.forwardRef<
  React.ElementRef<typeof ExpoTR>,
  ITableRowProps
>(({ className, ...props }, ref) => {
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

const TableData = React.forwardRef<
  React.ElementRef<typeof View | typeof Text>,
  ITableDataProps
>(({ useRNView = false, className, ...props }, ref) => {
  if (useRNView) {
    return (
      <View
        ref={ref}
        className={tableDataStyle({ class: className })}
        {...props}
      />
    );
  } else {
    return (
      <Text
        ref={ref}
        className={tableDataStyle({ class: className })}
        {...props}
      />
    );
  }
});

const TableCaption = React.forwardRef<
  React.ElementRef<typeof ExpoTCaption>,
  ITableCaptionProps
>(({ className, ...props }, ref) => {
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
