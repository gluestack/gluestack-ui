// @ts-nocheck
import { Motion } from '@legendapp/motion';
import { styled } from '../../styled';
import { View } from 'react-native';

export default styled(
  Motion.View,
  {
    // h: '$40',
    // alignItems: 'center',
    // borderTopLeftRadius: '$3xl',
    // borderTopRightRadius: '$3xl',
    // height: '100%',
    // p: '$2',
    // _sectionHeaderBackground: {
    //   bg: '$backgroundLight0',
    // },
    // _dark: {
    //   bg: '$backgroundDark900',
    //   _sectionHeaderBackground: {
    //     bg: '$backgroundDark900',
    //   },
    // },
    // _web: {
    //   userSelect: 'none',
    // },
    // defaultProps: {
    //   hardShadow: '5',
    // },
  },
  {
    descendantStyle: ['_sectionHeaderBackground'],
  }
);
