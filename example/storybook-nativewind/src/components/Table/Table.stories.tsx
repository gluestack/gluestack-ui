import type { ComponentMeta } from '@storybook/react-native';
import Table from './Table';

const TableMeta: ComponentMeta<typeof Table> = {
  title: 'stories/Table',
  component: Table,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Card component serves as a visual container that groups related content and actions.`,
  },
  argTypes: {},
};

export default TableMeta;

export { Table };
