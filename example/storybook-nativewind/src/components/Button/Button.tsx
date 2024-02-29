import React from 'react';
import {
  Button,
  ButtonText,
  ButtonSpinner,
} from '../../components-example/nativewind/Button/ButtonHook';
// 232.4

// import {
//   Button,
//   ButtonText,
//   ButtonSpinner,
// } from '../../components-example/nativewind/Button';
// 222.6

import TimedRender from '../../TimeRenderer.js';
import { HStack } from '@gluestack-ui/themed';

export const ButtonBasic = (props: any) => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div style={{ overflow: 'scroll' }}>
        <TimedRender setCount={setCount} count={count}>
          <HStack>
            {[...Array(1000)].map((e, i) => (
              <Button key={i} {...props}>
                <ButtonText>Hello World{count}</ButtonText>
              </Button>
            ))}
          </HStack>
        </TimedRender>
      </div>
    </>
  );
};

ButtonBasic.description =
  'This is a basic Button component example.  A button is a component that users can tap to trigger an action.';

export default ButtonBasic;

export { Button, ButtonText };
