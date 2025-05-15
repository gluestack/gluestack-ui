import React from "react";


export const Table = (props: React.HTMLProps<HTMLTableElement>) => (
  <table
    {...props}
    className={`w-full border-collapse text-sm my-4 rounded-lg overflow-hidden`}
  />
);

export const TableHeader = (props: React.HTMLProps<HTMLTableSectionElement>) => (
  <thead
    {...props}
    className={`py-4 border border-border-200`}
  />
);

export const TableBody = (props: React.HTMLProps<HTMLTableSectionElement>) => (
  <tbody
    {...props}
    className={`border-x border-border-200`}
  />
);

export const TableRow = (props: React.HTMLProps<HTMLTableRowElement>) => (
  <tr
    {...props}
    className={`border border-border-200`}
  />
);  

export const TableCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td
    {...props}
    className={`p-3 text-typography-950`}
  />
);  

export const TableHeaderCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <th
    {...props}
    className={`bg-background-50 py-4 px-4 text-left font-medium`}
  />
);      

