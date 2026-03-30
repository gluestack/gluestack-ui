import React, { createContext, useMemo, useContext } from 'react';
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

const TableHeaderContext = createContext<{
  isHeaderRow: boolean;
}>({
  isHeaderRow: false,
});
const TableFooterContext = createContext<{
  isFooterRow: boolean;
}>({
  isFooterRow: false,
});

const Table = React.forwardRef<HTMLTableElement, React.ComponentProps<'table'> & { testID?: string }>(
  function Table({ className, testID, ...props }, ref) {
    return (
      <table
        ref={ref}
        className={tableStyle({ class: className })}
        {...props}
        data-testid={testID}
      />
    );
  }
);

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<'thead'> & { testID?: string }
>(function TableHeader({ className, testID, ...props }, ref) {
  const contextValue = useMemo(() => {
    return {
      isHeaderRow: true,
    };
  }, []);
  return (
    <TableHeaderContext.Provider value={contextValue}>
      <thead
        ref={ref}
        className={tableHeaderStyle({ class: className })}
        {...props}
        data-testid={testID}
      />
    </TableHeaderContext.Provider>
  );
});

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<'tbody'> & { testID?: string }
>(function TableBody({ className, testID, ...props }, ref) {
  return (
    <tbody
      ref={ref}
      className={tableBodyStyle({ class: className })}
      {...props}
      data-testid={testID}
    />
  );
});

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<'tfoot'> & { testID?: string }
>(function TableFooter({ className, testID, ...props }, ref) {
  const contextValue = useMemo(() => {
    return {
      isFooterRow: true,
    };
  }, []);
  return (
    <TableFooterContext.Provider value={contextValue}>
      <tfoot
        ref={ref}
        className={tableFooterStyle({ class: className })}
        {...props}
        data-testid={testID}
      />
    </TableFooterContext.Provider>
  );
});

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentProps<'th'> & { testID?: string }
>(function TableHead({ className, testID, ...props }, ref) {
  return (
    <th ref={ref} className={tableHeadStyle({ class: className })} {...props} data-testid={testID} />
  );
});

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentProps<'tr'> & { testID?: string }
>(function TableRow({ className, testID, ...props }, ref) {
  const { isHeaderRow } = useContext(TableHeaderContext);
  const { isFooterRow } = useContext(TableFooterContext);
  return (
    <tr
      ref={ref}
      className={tableRowStyleStyle({
        isHeaderRow,
        isFooterRow,
        class: className,
      })}
      {...props}
      data-testid={testID}
    />
  );
});

const TableData = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentProps<'td'> & { testID?: string }
>(function TableData({ className, testID, ...props }, ref) {
  return (
    <td ref={ref} className={tableDataStyle({ class: className })} {...props} data-testid={testID} />
  );
});

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.ComponentProps<'caption'> & { testID?: string }
>(function TableCaption({ className, testID, ...props }, ref) {
  return (
    <caption
      ref={ref}
      className={tableCaptionStyle({ class: className })}
      {...props}
      data-testid={testID}
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
