import { View } from 'react-native';
import { styled } from '../../styled';
import { Link } from 'solito/link';
import { propertyTokenMap } from '@gluestack-style/react/src/propertyTokenMap';
export default styled(
  Link,
  {
    props: {
      // @ts-ignore
      viewProps: {
        // backgroundColor: '$yellow500',
        // borderRadius: '$md',
        // borderWidth: 2,
        // borderColor: '$red700',
        'outlineWidth': 0,
        ':focusVisible': {
          outlineWidth: 2,
          outlineColor: '$primary700',
          outlineStyle: 'solid',
          _dark: {
            // @ts-ignore
            outlineColor: '$primary400',
          },
        },
      },
    },
    _text: {
      'fontWeight': '$normal',
      'textDecorationLine': 'underline',
      'color': '$info700',
      ':hover': {
        color: '$info600',
        textDecorationLine: 'none',
      },
      ':active': {
        color: '$info700',
      },
      ':disabled': {
        opacity: 0.4,
      },
      '_dark': {
        'color': '$info300',
        ':hover': {
          color: '$info400',
          textDecorationLine: 'none',
        },
        ':active': {
          color: '$info300',
        },
        ':disabled': {
          opacity: 0.4,
        },
      },
    },
  },
  {
    resolveProps: ['viewProps'],
    descendantStyle: ['_text'],
  },
  {
    propertyTokenMap: {
      viewProps: View,
    },
    propertyResolver: {
      viewProps: (rawValue: any, resolver: any) => {
        Object.keys(rawValue).forEach((key) => {
          rawValue[key] = resolver(
            rawValue[key],
            // @ts-ignore
            propertyTokenMap[key]
          );
        });
        return { style: { ...rawValue } };
      },
    },
  }
);
