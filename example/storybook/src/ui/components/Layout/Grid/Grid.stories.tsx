import type { ComponentMeta } from '@storybook/react-native';
import Grid from './Grid';
import GridFlex from './GridFlex';
import BasicGrid from './BasicGrid';
import GridBasic from './GridBasic';
import GridLayout from './GridLayout';

const GridMeta: ComponentMeta<typeof Grid> = {
  title: 'stories/LAYOUT/Grid',
  component: Grid,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `A Card component serves as a visual container that groups related content and actions.`,
  },
  argTypes: {},
};

export default GridMeta;
export { Grid, GridFlex, BasicGrid, GridBasic, GridLayout };
