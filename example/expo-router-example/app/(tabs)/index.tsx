import { StyleSheet } from 'react-native';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Link } from 'expo-router';

const Box = styled(
  View,
  {
    p: '$10',
    bg: '$amber500',
  },
  {
    componentName: 'Boxxx',
  }
);

const StyledButton = styled(
  Pressable,
  {
    'p': '$3',
    'bg': '$blue500',
    'variants': {
      variant: {
        solid: {
          ':active': {
            bg: '$pink500',
          },
          // '_text': {
          //   ':active': {
          //     bg: '$textLight0',
          //   },
          // },
        },
      },
    },

    'props': {
      variant: 'solid',
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_text'],
    componentName: 'Button',
  }
);

const Button = ({ children, onPressIn, onPressOut, ...props }: any) => {
  const [active, setActive] = React.useState(false);
  return (
    <StyledButton
      role={props?.role || 'button'}
      states={{
        active,
      }}
      onPressIn={() => {
        setActive(true);
        onPressIn && onPressIn();
      }}
      onPressOut={() => {
        setActive(false);
        onPressOut && onPressOut();
      }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const linkSx = {
  props: {
    as: View,
  },
};

const WrapperComp = ({ children }: any) => {
  console.log('herhehre');

  React.useEffect(() => {
    console.log('mounted');

    return () => {
      console.log('unmounted');
    };
  }, []);

  return children;
};

export default function TabOneScreen() {
  // const [click, setClick] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>dlfkvndlnv One</Text>
      <Button
        // onPressIn={() => setClick(true)}
        // onPressOut={() => setClick(false)}
        onPress={() => {
          console.log('Hello word');
        }}
        sx={{
          _text: {
            // color: click ? '$red500' : '$amber500',
            ':active': {
              bg: '$textLight0',
            },
          },
        }}
      >
        <Box
          href="/modal"
          sx={{
            props: {
              as: Link,
            },
          }}
        />
      </Button>
      <Button
        sx={{
          _text: {
            ':active': {
              bg: '$textLight0',
            },
          },
        }}
      >
        <Box
          href="/modal"
          as={Link}
          sx={{
            bg: '$red500',
          }}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
