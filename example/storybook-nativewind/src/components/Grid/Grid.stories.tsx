import type { ComponentMeta } from '@storybook/react-native';
import Grid from './Grid';

const GridMeta: ComponentMeta<typeof Grid> = {
  title: 'stories/Grid',
  component: Grid,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `This is a Grid component.`,
  },
};

export default GridMeta;
export { Grid };
