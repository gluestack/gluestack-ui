import React from 'react';
export {
  Root as TableContainer,
  Table,
  TableBody,
  // TableData,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from './styled-components';

import { TableData as StyledTableData } from './styled-components';
import { Text } from 'react-native';

export const TableData = React.forwardRef(({ children, ...props }: any) => {
  if (typeof children === 'string') {
    return (
      <StyledTableData {...props}>
        <Text>{children}</Text>
      </StyledTableData>
    );
  } else {
    return <StyledTableData {...props}>{children}</StyledTableData>;
  }
});
