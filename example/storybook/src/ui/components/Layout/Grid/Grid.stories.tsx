import type { ComponentMeta } from '@storybook/react-native';
import Grid from './Grid';
import GridView from './GridView';
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
export { Grid, GridView };
