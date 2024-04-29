import React from 'react';
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
    <table ref={ref} className={tableStyle({ class: className })} {...props} />
  );
});

const TableHeader = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <thead
      ref={ref}
      className={tableHeaderStyle({ class: className })}
      {...props}
    />
  );
});

const TableBody = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <tbody
      ref={ref}
      className={tableBodyStyle({ class: className })}
      {...props}
    />
  );
});

const TableFooter = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <tfoot
      ref={ref}
      className={tableFooterStyle({ class: className })}
      {...props}
    />
  );
});

const TableHead = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <th ref={ref} className={tableHeadStyle({ class: className })} {...props} />
  );
});

const TableRow = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <tr
      ref={ref}
      className={tableRowStyleStyle({ class: className })}
      {...props}
    />
  );
});

const TableData = React.forwardRef(({ className, ...props }: any, ref) => {
  return (
    <td ref={ref} className={tableDataStyle({ class: className })} {...props} />
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
