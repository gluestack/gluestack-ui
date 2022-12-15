import { Button } from '../../src/ui-components';

export const Example = ({ ...props }) => {
  return (
    <Button sx={{ style: { bg: '$red.500' } }}>
      <Button.Text>Hello</Button.Text>
    </Button>
  );
};
