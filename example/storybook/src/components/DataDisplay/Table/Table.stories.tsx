import type { ComponentMeta } from '@storybook/react-native';
import Table from './Table';

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

export { Table };
