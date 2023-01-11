import React from 'react';
import { CodeBlock, Text, AppProvider } from '@gluestack/design-system';
import type { ComponentMeta } from '@storybook/react-native';
import {
  Canvas,
  Story,
  Primary,
  PRIMARY_STORY,
  ArgsTable,
} from '@storybook/addon-docs';
import { StyleSheet, View, Pressable } from 'react-native';
import { Section } from '../../../storybookDocsComponents/Section';
import { styled, StyledProvider } from 'dank-style';
import { config } from '../../../nb.config';
import { Page } from '../../../storybookDocsComponents/Page';
import { SectionWrapper } from '../../../storybookDocsComponents/SectionWrapper';

const ExampleCode = `
import { styled, StyledProvider } from 'dank-style';
const MyButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary500',
        p: '$3',
      },
    },
  },
  {}
);

const MyButtonText = styled(Text, {}, {});

function ButtonComponent() {
  return (
    <MyButton>
      <MyButtonText>Hello World</MyButtonText>
    </MyButton>
  );
}

export function Button() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <ButtonComponent />
      </View>
    </StyledProvider>
  );
}
`;

const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'Skeleton/Button',
  component: Button,
  parameters: {
    docs: {
      page: () => {
        return (
          <AppProvider>
            <Page>
              <Page.Title>Installation</Page.Title>
              <Page.Description>
                How to install Dank and get up and running.
              </Page.Description>
            </Page>
            <Section>
              <Section.Title>Install Dank</Section.Title>
              <Section.Description>
                Install Dank from your terminal via npm or yarn.
              </Section.Description>

              {/* <Canvas>
                <Story id="skeleton-button--button" />
              </Canvas> */}
              <CodeBlock code={ExampleCode} />
            </Section>
            <SectionWrapper>
              <SectionWrapper.Title>Configure Dank</SectionWrapper.Title>
              <SectionWrapper.Body>
                <Section>
                  <Section.Title>Install Dank</Section.Title>
                  <Section.Description>
                    Install Dank from your terminal via npm or yarn.
                  </Section.Description>
                </Section>
                <Section>
                  <Section.Title>Install Dank</Section.Title>
                  <Section.Description>
                    Install Dank from your terminal via npm or yarn.
                  </Section.Description>
                </Section>
              </SectionWrapper.Body>
            </SectionWrapper>
          </AppProvider>
        );
      },
    },
  },
};

export default MyButtonMeta;

const MyButton = styled(
  Pressable,
  {
    baseStyle: {
      style: {
        bg: '$primary500',
        p: '$3',
      },
    },
  },
  {}
);

const MyButtonText = styled(Text, {}, {});

function ButtonComponent() {
  return (
    <MyButton>
      <MyButtonText>Hello World</MyButtonText>
    </MyButton>
  );
}

export function Button() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <ButtonComponent />
      </View>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyWrap: 'wrap',
    flexDirection: 'column',
  },
  container1: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    backgroundColor: 'red',

    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  container2: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  container3: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  container4: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  container5: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  container6: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container7: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  container8: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  container9: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  container10: {
    backgroundColor: 'white',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
