import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Fab, HamburgerIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

// var st = document.createElement('style');
// st.innerHTML = `#story--fab--basic { height: 350px }`;
// document.body.append(st);

const FabMeta: ComponentMeta<typeof Fab> = {
  title: 'OTHERS/Fab',
  component: Fab,
  argTypes: {
    variant: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'top-right',
    showLabel: true,
  },
};

export default FabMeta;

type MyBadgeStory = ComponentStory<typeof Fab>;

export const Basic: MyBadgeStory = ({ variant, showLabel, ...props }) => {
  return (
    <Wrapper>
      <Fab variant={variant} sx={{ style: { mx: 20, my: 20 } }}>
        <HamburgerIcon sx={{ style: { w: 20, h: 20 } }} color="white" />
        {showLabel && <Fab.Label>Menu</Fab.Label>}
      </Fab>
    </Wrapper>
  );
};
