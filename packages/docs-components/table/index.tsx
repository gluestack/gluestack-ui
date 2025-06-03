import React from 'react';

export const Table = (props: React.HTMLProps<HTMLTableElement>) => (
  <table
    {...props}
    className={`w-full text-sm my-4 rounded-xl border-collapse`}
  />
);

export const TableHeader = (
  props: React.HTMLProps<HTMLTableSectionElement>
) => (
  <thead
    {...props}
    className={`py-4 border-outline-50 bg-background-50 rounded-xl`}
  />
);

export const TableBody = (props: React.HTMLProps<HTMLTableSectionElement>) => (
  <tbody {...props} className={`border border-outline-50 last:rounded-b-xl`} />
);

export const TableRow = (props: React.HTMLProps<HTMLTableRowElement>) => (
  <tr {...props} className={`border-b border-outline-50 last:rounded-b-xl`} />
);

export const TableCell = (props: React.HTMLProps<HTMLTableCellElement>) => (
  <td {...props} className={`px-4 py-3 font-medium`} />
);

export const TableHeaderCell = (
  props: React.HTMLProps<HTMLTableCellElement>
) => (
  <th
    {...props}
    className={`py-4 px-4 text-left font-medium first:rounded-tl-xl last:rounded-tr-xl`}
  />
);
