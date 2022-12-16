// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { convertUtilityPropsToSX } from '@gluestack/ui-convert-utility-to-sx';
import { styled } from '@gluestack/styled';

const Box = styled(
  View,
  {
    baseStyle: {
      style: {
        bg: '$blue500',
        p: '$6',
        rounded: '$full',
      },
      state: {
        hover: {
          style: {
            bg: '$colors$red300',
          },
        },
      },
    },
    variants: {
      greenBox: {
        style: {
          bg: '$green500',
        },
        state: {
          hover: {
            style: {
              bg: '$green600',
            },
          },
        },
      },
    },
  },
  {}
);

export default function App() {
  const { sxProps, ignoredProps } = convertUtilityPropsToSX(
    {
      bg: {
        property: 'bbackgroundColor',
        scale: 'colors',
      },
      p: {
        property: 'padding',
        scale: 'space',
      },
    },
    {
      _text: true,
      _spinner: true,
    },
    {
      'onPress': () => {},
      'bg': '$amber500',
      'p': '$6',
      'hover-bg': '$red600',
      'hover-nahi-chalega-android-bg': '$red700',
      'hover-_text-ios-light-bg': '$red800',
      '_text-color': '$white',
      '_text-hover-focus-color': '$white',
      '_spinner-hover-color': '$white',
    }
  );
  console.log(sxProps, ignoredProps, 'FN');

  return (
    <View style={styles.container}>
      <Box
        dataSet={{ ...ignoredProps }}
        sx={{
          style: {
            bg: '$red500',
          },
          ...sxProps,
        }}
      >
        Hello Box
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
