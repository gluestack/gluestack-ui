import { BottomSheet, BottomSheetTrigger, BottomSheetContent, BottomSheetBackdrop, BottomSheetDragIndicator, BottomSheetItem, BottomSheetItemText, BottomSheetPortal, BottomSheetScrollView, BottomSheetTextInput, BottomSheetFooter } from '@/components/ui/bottomsheet'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Button, ButtonText } from '@/components/ui/button'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
     <BottomSheet>
            <BottomSheetTrigger>
              <Text>Open BottomSheet</Text>
            </BottomSheetTrigger>
            <BottomSheetPortal
              snapPoints={['25%', '50%']}
              backdropComponent={BottomSheetBackdrop}
              handleComponent={BottomSheetDragIndicator}
            >
              <BottomSheetContent>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 1</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 2</BottomSheetItemText>
                </BottomSheetItem>
                <BottomSheetItem>
                  <BottomSheetItemText>Item 3</BottomSheetItemText>
                </BottomSheetItem>
              </BottomSheetContent>
            </BottomSheetPortal>
          </BottomSheet>
  )
};

const ExampleWithSearchInput = () => {
const [query, setQuery] = React.useState('');

  const items = [
    'Design', 'Development', 'Marketing', 'Product',
    'Research', 'Engineering', 'Sales', 'Support',
  ];

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <BottomSheet>
      <BottomSheetTrigger>
        <Text>Open Search Sheet</Text>
      </BottomSheetTrigger>
      <BottomSheetPortal
        snapPoints={['60%']}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
      >
        <BottomSheetScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerClassName="pb-8"
        >
          <VStack className="px-4 pt-2 pb-3 gap-3">
            <Text className="text-lg font-bold text-foreground">Search Categories</Text>
            <BottomSheetTextInput
              placeholder="Type to filter..."
              value={query}
              onChangeText={setQuery}
              className="h-11 border border-border rounded-lg px-3 text-sm text-foreground"
            />
            <Text className="text-xs text-foreground/50">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            </Text>
          </VStack>

          {filtered.length === 0 ? (
            <VStack className="py-8 items-center">
              <Text className="text-sm text-foreground/40">No results for "{query}"</Text>
            </VStack>
          ) : (
            filtered.map(item => (
              <BottomSheetItem key={item}>
                <BottomSheetItemText>{item}</BottomSheetItemText>
              </BottomSheetItem>
            ))
          )}
        </BottomSheetScrollView>
      </BottomSheetPortal>
    </BottomSheet>
  )
};

const ExampleWithFooter = () => {
const ref = React.useRef(null);
  const [selected, setSelected] = React.useState([]);

  const items = [
    'Copy Link',
    'Save to Library',
    'Set as Wallpaper',
    'Share via...',
    'Delete',
  ];

  const toggle = (item) => {
    setSelected(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const footer = React.useCallback((props) => (
    <BottomSheetFooter {...props} className="bg-background">
      <HStack className="gap-3">
        <Button
          variant="outline"
          className="flex-1 rounded-xl"
          onPress={() => ref.current?.close()}
        >
          <ButtonText>Cancel</ButtonText>
        </Button>
        <Button
          className="flex-1 rounded-xl"
          isDisabled={selected.length === 0}
          onPress={() => ref.current?.close()}
        >
          <ButtonText>
            {selected.length > 0 ? 'Confirm (' + selected.length + ')' : 'Confirm'}
          </ButtonText>
        </Button>
      </HStack>
    </BottomSheetFooter>
  ), [selected.length]);

  return (
    <BottomSheet ref={ref}>
      <BottomSheetTrigger>
        <Text>Open with Footer</Text>
      </BottomSheetTrigger>
      <BottomSheetPortal
        snapPoints={['50%']}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
        footerComponent={footer}
      >
        <BottomSheetScrollView contentContainerClassName="pb-24" showsVerticalScrollIndicator={false}>
          <VStack className="px-4 pt-2 pb-2">
            <Text className="text-lg font-bold text-foreground">Choose Actions</Text>
            <Text className="text-xs text-foreground/50 mt-0.5">Select one or more options</Text>
          </VStack>

          {items.map(item => {
            const isSelected = selected.includes(item);
            return (
              <BottomSheetItem
                key={item}
                closeOnSelect={false}
                onPress={() => toggle(item)}
                className={isSelected ? 'bg-primary/5' : ''}
              >
                <HStack className="flex-1 items-center justify-between">
                  <BottomSheetItemText
                    className={isSelected ? 'text-primary font-semibold' : ''}
                  >
                    {item}
                  </BottomSheetItemText>
                  {isSelected && (
                    <Text className="text-primary text-base">✓</Text>
                  )}
                </HStack>
              </BottomSheetItem>
            );
          })}
        </BottomSheetScrollView>
      </BottomSheetPortal>
    </BottomSheet>
  )
};

const ExampleWithSnapPoints = () => {
const ref = React.useRef(null);
  const [currentSnap, setCurrentSnap] = React.useState(-1);

  return (
    <BottomSheet ref={ref} onChange={setCurrentSnap} onClose={() => setCurrentSnap(-1)}>
      <VStack className="gap-4 items-start">
        <Text className="text-sm text-foreground/60">
          {currentSnap >= 0
            ? 'Sheet open at snap index: ' + currentSnap
            : 'Sheet is closed'}
        </Text>

        <VStack className="gap-2 w-full">
          <Text className="text-xs font-semibold text-foreground/40 uppercase tracking-widest">
            Open
          </Text>
          <HStack className="gap-2">
            <Button onPress={() => ref.current?.open(0)}>
              <ButtonText>Open at 30%</ButtonText>
            </Button>
            <Button onPress={() => ref.current?.open(1)}>
              <ButtonText>Open at 75%</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </VStack>

      <BottomSheetPortal
        snapPoints={['30%', '75%']}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
      >
        <BottomSheetContent>
          <VStack className="gap-4">
            <VStack className="gap-1">
              <Text className="text-lg font-bold text-foreground">Snap Points</Text>
              <Text className="text-sm text-foreground/50">
                Current snap index: {currentSnap}
              </Text>
            </VStack>
            <HStack className="gap-2">
              <Button className="flex-1" onPress={() => ref.current?.snapToIndex(0)}>
                <ButtonText>Snap to 30%</ButtonText>
              </Button>
              <Button className="flex-1" variant="outline" onPress={() => ref.current?.snapToIndex(1)}>
                <ButtonText>Snap to 75%</ButtonText>
              </Button>
            </HStack>
          </VStack>
        </BottomSheetContent>
      </BottomSheetPortal>
    </BottomSheet>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-search-input",
    label: "With Search Input",
    content: <ExampleWithSearchInput />,
  },
  {
    value: "with-footer",
    label: "With Footer",
    content: <ExampleWithFooter />,
  },
  {
    value: "with-snap-points",
    label: "With Snap Points",
    content: <ExampleWithSnapPoints />,
  }
];

export default function BottomsheetScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}