import Logo from '@/assets/icons/Logo';
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetPortal,
  BottomSheetScrollView,
  BottomSheetTextInput,
  BottomSheetTrigger,
} from '@/components/ui/bottomsheet';
import { Box } from '@/components/ui/box';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React from 'react';

export default function Home() {
  const [query, setQuery] = React.useState('');
  const items = [
    'Design',
    'Development',
    'Marketing',
    'Product',
    'Research',
    'Engineering',
    'Sales',
    'Support',
  ];

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <Box className="flex-1 bg-background">
      <Center className="flex-1 gap-5">
        <Logo />
        <Text className="font-semibold">
          Get started by editing{' '}
          <Text className="text-primary/70">app/index.tsx</Text>
        </Text>
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
                  <Text className="text-lg font-bold text-foreground">
                    Search Categories
                  </Text>
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
                    <Text className="text-sm text-foreground/40">
                      No results for "{query}"
                    </Text>
                  </VStack>
                ) : (
                  filtered.map((item) => (
                    <BottomSheetItem key={item}>
                      <BottomSheetItemText>{item}</BottomSheetItemText>
                    </BottomSheetItem>
                  ))
                )}
              </BottomSheetScrollView>
          </BottomSheetPortal>
        </BottomSheet>
        
      </Center>
    </Box>
  );
}