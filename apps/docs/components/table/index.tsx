import React from "react";


export const Table = (props: React.HTMLProps<HTMLTableElement>) => (
  <table
    {...props}
    className={`w-full border-collapse text-sm my-4`}
  />
);

export const TableHeader = (props: React.HTMLProps<HTMLTableSectionElement>) => (
  <thead
    {...props}
    className={`py-4 `}
  />
);

export const TableBody = (props: React.HTMLProps<HTMLTableSectionElement>) => (
  <tbody
    {...props}
    className={``}
  />
);

export const TableRow = (props: React.HTMLProps<HTMLTableRowElement>) => (
  <tr
    {...props}
    className={``}
  />
);  

export const TableCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td
    {...props}
    className={``}
  />
);  

export const TableHeaderCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <th
    {...props}
    className={`bg-gray-100 py-4`}
  />
);      

