import { StyledButton, StyledButtonText } from '../../styled-components';
import { createButton } from '@gluestack/ui-creator';

export const Button = createButton({
  StyledButton,
  StyledButtonText,
}) as any;

export const Example = ({ ...props }) => {
  return (
    <Button sx={{ style: { bg: '$red.500' } }}>
      <Button.Text>Hello</Button.Text>
    </Button>
  );
};
