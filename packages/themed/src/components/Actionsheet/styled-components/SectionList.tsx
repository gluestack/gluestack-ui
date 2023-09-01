import { SectionList } from 'react-native';
import { styled } from '../../styled';

export default styled(
  SectionList,
  {
    w: '$full',
    h: 'auto',
  },
  {
    componentName: 'ActionsheetSectionList',
  } as const
);
