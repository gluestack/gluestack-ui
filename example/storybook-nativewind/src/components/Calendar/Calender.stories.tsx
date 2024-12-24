import type { ComponentMeta } from '@storybook/react-native';
import Calendar from './Calendar';

const CalendarMeta: ComponentMeta<typeof Calendar> = {
  title: 'stories/Calendar',
  component: Calendar,
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'A calendar component that allows users to select dates and navigate between months.',
  },
  args: {},
  argTypes: {},
};

export default CalendarMeta;

export { Calendar };
