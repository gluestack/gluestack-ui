import React, { useEffect } from 'react';

import { Pressable, Text, View } from '@gluestack-ui/themed';
import { useToggleState } from 'react-stately';
import { createContext } from 'react';
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
      <View {...props} />
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
      onPress={() => {
        setIsExpanded(!isExpanded);
        state.toggle();
      }}
    >
      {children}
    </Pressable>
  );
};
const TriggerText = (props: any) => {
  return <Text {...props} />;
};

const Content = (props: any) => {
  const { isExpanded } = React.useContext(CollapsibleContext);

  return <>{isExpanded || (props.forceMount && <View {...props} />)}</>;
};
const ContentText = (props: any) => {
  return <Text {...props} />;
};
const CollapsibleBasic = ({}: any) => {
  return (
    <Root>
      <Trigger>
        <TriggerText>Collapsible</TriggerText>
      </Trigger>
      <Content>
        <ContentText>Content</ContentText>
      </Content>
    </Root>
  );
};

CollapsibleBasic.description =
  'This is a basic  component example. The  component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default CollapsibleBasic;
