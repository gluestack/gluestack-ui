// import { Text } from '@gluestack-ui/ui';
import { styled } from '../../styled';
import { Text } from '../../Text';
export default styled(
  Text,
  {
    ml: '$1',
    color: '$error700',
    _dark: {
      color: '$error400',
    },
  },
  {
    componentName: 'FormControlErrorText',
    ancestorStyle: ['_labelAstrick'],
  } as const
);
