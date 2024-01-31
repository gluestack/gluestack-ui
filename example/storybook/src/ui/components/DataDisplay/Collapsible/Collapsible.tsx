import React from 'react';

import { Pressable, Text, View } from '@gluestack-ui/themed';
import { useToggleState } from 'react-stately';
import { createContext } from 'react';
import { styled } from '@gluestack-style/react';
const StyledView = styled(
  View,
  {},
  {
    componentName: 'StyledView',
  }
);
const CollapsibleContext = createContext<any>({
  isExpanded: false,
  setIsExpanded: () => {},
});

const Root = (props: any) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contextValue = React.useMemo(() => {
    return {
      isExpanded,
      setIsExpanded,
    };
  }, [isExpanded, setIsExpanded]);

  return (
    <CollapsibleContext.Provider value={contextValue}>
      <StyledView
        states={{
          checked: isExpanded,
        }}
        {...props}
      />
    </CollapsibleContext.Provider>
  );
};

const Trigger = ({ children, defaultValue, value, ...props }: any) => {
  const { isExpanded, setIsExpanded } = React.useContext(CollapsibleContext);
  const state = useToggleState({
    defaultSelected: !(defaultValue === null || defaultValue === undefined)
      ? defaultValue
      : !(value === null || value === undefined)
      ? value
      : false,
  });

  return (
    <Pressable
      states={{
        // @ts-ignore
        expanded: isExpanded,
      }}
      {...props}
      onPress={() => {
        setIsExpanded(!isExpanded);
        state.toggle();
      }}
    >
      {typeof children === 'function'
        ? children({
            expanded: isExpanded,
          })
        : children}
    </Pressable>
  );
};
const TriggerText = (props: any) => {
  return <Text {...props} />;
};

const Content = ({ forceMount = false, ...props }: any) => {
  const { isExpanded } = React.useContext(CollapsibleContext);

  if (!forceMount && isExpanded) {
    return null;
  }

  return <View {...props} />;
};

const ContentText = (props: any) => {
  return <Text {...props} />;
};
const CollapsibleBasic = ({}: any) => {
  return (
    <Root
      sx={{
        'maxHeight': '20vh',
        ':checked': {
          maxHeight: '80vh',
        },
        'overflow': 'scroll',
        'width': 350,
        'bg': '$backgroundDark900',
        'position': 'relative',
      }}
    >
      <Content
        forceMount
        sx={{
          height: '100vh',
        }}
      >
        <ContentText sx={{ color: '$white' }}>
          {`
          <TempProvider config={config}>
            <Box
              sx={{
                _dark: {
                  bg: '$backgroundDark950',
                },
              }}
            >
              <Center>{children}</Center>
            </Box>
          </TempProvider>
          `}
        </ContentText>
      </Content>
      <Trigger
        sx={{
          position: 'sticky',
          bottom: 0,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '$backgroundDark900',
          opacity: 0.7,
        }}
      >
        {
          // @ts-ignore
          ({ expanded }) => {
            return (
              <TriggerText
                sx={{
                  color: '$textLight100',
                  fontSize: 20,
                  fontWeight: 'bold',
                  py: '$2',
                  px: '$3',
                }}
              >
                {expanded ? 'Expand' : 'Collapse'}
              </TriggerText>
            );
          }
        }
      </Trigger>
    </Root>
  );
};

CollapsibleBasic.description =
  'This is a basic  component example. The  component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CollapsibleBasic;
