import type { ComponentMeta } from '@storybook/react-native';
import LineChart from './LineChart';

const AccordionMeta: ComponentMeta<typeof LineChart> = {
  title: 'stories/Line Chart',
  component: LineChart,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Line Chart component displays data compatable with a two-dimensional cartesian plane`,
  },
  argTypes: {},
};

export default AccordionMeta;

export { LineChart };
