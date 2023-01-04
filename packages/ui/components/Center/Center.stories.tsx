import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Center, Text } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';

const MyCenterMeta: ComponentMeta<typeof Center> = {
  title: 'LAYOUT/Center',
  component: Center,
  argTypes: {},
  args: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="Center"
            description="Center aligns its contents to the center within itself. It is a layout component."
            componentName="Center"
          />
        </>
      ),
    },
  },
};

export default MyCenterMeta;

type MyCustomCenterStory = ComponentStory<typeof Center>;

// export const AExample: MyCustomCenterStory = ({ ...props }) => {
//   return (
//     <Center sx={{ style: { bg: '$green500', h: 200, w: 200 } }}>
//       <Text sx={{ style: { color: 'white', fontWeight: 'bold' } }} {...props}>
//         CENTERED
//       </Text>
//     </Center>
//   );
// };

export { Basic } from './Basic';
export { Shapes } from './Shapes';
