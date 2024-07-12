import type { ComponentMeta } from '@storybook/react-native';
import Portal from './Portal';

const PortalMeta: ComponentMeta<typeof Portal> = {
  title: 'stories/Portal',
  component: Portal,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `By providing access to hover, pressed, and focus events, Portal serves as a more flexible alternative to buttons at a lower level of abstraction. It is a useful primitive for advanced customization needs.`,
  },
  argTypes: {},
  args: {
    disabled: false,
  },
};

export default PortalMeta;

export { Portal };
