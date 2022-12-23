import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button, Center, AddIcon, MinusIcon } from '@gluestack/ui';

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button Text',
    variant: 'solid',
    size: 'md',
    isLoading: false,
    leftIcon: false,
    rightIcon: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    isLoading: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = ({
  leftIcon,
  isLoading,
  rightIcon,
  text,
  ...props
}) => {
  return (
    <Center>
      <Button {...props}>
        {isLoading && <Button.Spinner sx={{ style: { mr: 8 } }} />}
        {leftIcon && <MinusIcon sx={{ style: { mr: 8 } }} />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon sx={{ style: { ml: 8 } }} />}
      </Button>
    </Center>
  );
};

// export const GroupedExample: MyButtonGroupStory = ({
//   variant,
//   text,
//   size,
//   isLoading,
//   leftIcon,
//   rightIcon,
//   direction,
//   ...props
// }) => {
//   return (
//     <Center>
//       <Button.Group direction={direction}>
//         <Button variant={variant} size={size} {...props}>
//           {isLoading && <Button.Spinner />}
//           {leftIcon && <AddIcon />}
//           <Button.Text>{text}</Button.Text>
//           {rightIcon && <AddIcon />}
//         </Button>
//         <Button
//           variant={variant}
//           size={size}
//           {...props}
//           sx={{ style: { bg: '$blue500' } }}
//         >
//           {isLoading && <Button.Spinner />}
//           {leftIcon && <AddIcon />}
//           <Button.Text>{text}</Button.Text>
//           {rightIcon && <AddIcon />}
//         </Button>
//         <Button variant={variant} size={size} {...props}>
//           {isLoading && <Button.Spinner />}
//           {leftIcon && <AddIcon />}
//           <Button.Text>{text}</Button.Text>
//           {rightIcon && <AddIcon />}
//         </Button>
//       </Button.Group>
//     </Center>
//   );
// };

// GroupedExample.args = {
//   text: 'Button Text',
//   variant: 'solid',
//   size: 'md',
//   isLoading: false,
//   leftIcon: false,
//   rightIcon: false,
//   direction: 'row',
// };

// GroupedExample.argTypes = {
//   direction: {
//     control: 'radio',
//     options: ['row', 'column'],
//   },
// };
