import React from 'react';
import {
  Table as ExpoTable,
  THead as ExpoTHead,
  TBody as ExpoTBody,
  TFoot as ExpoTFoot,
  TH as ExpoTH,
  TR as ExpoTR,
  TD as ExpoTD,
} from '@expo/html-elements';
import {
  tableStyle,
  tableHeaderStyle,
  tableBodyStyle,
  tableFooterStyle,
  tableHeadStyle,
  tableRowStyleStyle,
  tableDataStyle,
} from './styles';

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
  return (
    <ExpoTHead
      ref={ref}
      className={tableHeaderStyle({ class: className })}
      {...props}
    />
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
  return (
    <ExpoTFoot
      ref={ref}
      className={tableFooterStyle({ class: className })}
      {...props}
    />
  );
});

const TableHead = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTH
      ref={ref}
      className={tableHeadStyle({ class: className })}
      {...props}
    />
  );
});

const TableRow = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTR
      ref={ref}
      className={tableRowStyleStyle({ class: className })}
      {...props}
    />
  );
});

const TableData = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <ExpoTD
      ref={ref}
      className={tableDataStyle({ class: className })}
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

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableData,
};
