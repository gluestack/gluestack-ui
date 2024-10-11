import {
  Table as TableMain,
  TH as THMain,
  TBody as TBodyMain,
  TD as TDMain,
  TFoot as TFootMain,
  THead as THeadMain,
  TR as TRMain,
  Text as TText,
  TableContainer,
} from './styled-components';

const TableTemp = TableMain as any;

TableTemp.TH = THMain;
TableTemp.TR = TRMain;
TableTemp.TD = TDMain;
TableTemp.THead = THeadMain;
TableTemp.TBody = TBodyMain;
TableTemp.TFoot = TFootMain;
TableTemp.TText = TText;

const Table = TableTemp;
Table.displayName = 'Table';
Table.TH.displayName = 'TH';
Table.TR.displayName = 'TR';
Table.TD.displayName = 'TD';
Table.THead.displayName = 'THead';
Table.TBody.displayName = 'TBody';
Table.TFoot.displayName = 'TFoot';
Table.TText.displayName = 'TText';

export { Table, TableContainer };
