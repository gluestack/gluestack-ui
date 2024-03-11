import type { ComponentMeta } from '@storybook/react-native';
import Table from './Table';
import TableSideHeader from './TableSideHeader';
import TableWithComponents from './TableWithComponents';
import TableStripped from './TableStripped';
import TableWithCaption from './TableWithCaption';
import TableFlatlist from './TableFlatlist';

const TableMeta: ComponentMeta<typeof Table> = {
  title: 'stories/DATA DISPLAY/Table',
  component: Table,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'Revamp your content organization with the Table component! Use it to visually separate different sections of a list or group for a more structured and easy-to-read interface.',
  },
};

export default TableMeta;

export {
  Table,
  TableSideHeader,
  TableWithComponents,
  TableStripped,
  TableWithCaption,
  TableFlatlist,
};
