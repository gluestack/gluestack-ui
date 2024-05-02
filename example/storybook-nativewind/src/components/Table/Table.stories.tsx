import type { ComponentMeta } from '@storybook/react-native';
import Table from './Table';
import TableCaption from './TableCaption';
import TableStripped from './TableStripped';
import TableWithComponent from './TableWithComponent';
import TableWithSideHeader from './TableWithSideHeader';

const TableMeta: ComponentMeta<typeof Table> = {
  title: 'stories/Table',
  component: Table,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Table component provides a flexible and customizable way to display tabular data, facilitating easy organization and presentation of information in various applications.`,
  },
};

export default TableMeta;

export {
  Table,
  TableCaption,
  TableStripped,
  TableWithComponent,
  TableWithSideHeader,
};
