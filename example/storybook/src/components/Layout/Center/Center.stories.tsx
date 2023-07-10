import type { ComponentMeta } from '@storybook/react-native';
import { CenterStory as Center } from './Center';

const CenterMeta: ComponentMeta<any> = {
  title: 'stories/LAYOUT/Center',
  component: Center,
  argTypes: {},
  args: {},
};

export default CenterMeta;

// type MyCustomCenterStory = ComponentStory<typeof Center>;

// export const AExample: MyCustomCenterStory = ({ ...props }) => {
//   return (
//     <Center sx={{ bg: '$green500', h: 200, w: 200 }}>
//       <Text sx={{ color: 'white', fontWeight: 'bold' }} {...props}>
//         CENTERED
//       </Text>
//     </Center>
//   );
// };

export { Center };
export { Shapes } from './Shapes';
