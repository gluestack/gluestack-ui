<<<<<<< HEAD
import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import React from 'react';

import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { useRouter } from 'expo-router';
=======
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Image } from '@/components/ui/image';
import {
  ImageViewer,
  ImageViewerTrigger,
  ImageViewerContent,
  ImageViewerCloseButton,
  ImageViewerNavigation,
  ImageViewerCounter,
} from '@/components/ui/image-viewer';
import {
  Calendar,
  CalendarHeader,
  CalendarHeaderPrevButton,
  CalendarHeaderNextButton,
  CalendarHeaderTitle,
  CalendarWeekDaysHeader,
  CalendarBody,
  CalendarGrid,
} from '@/components/ui/calendar';
import { Icon } from '@/components/ui/icon';
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icon';

export default function App() {
  // Track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Sample images for the ImageViewer demo
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&auto=format&fit=crop&q=60',
      alt: 'Mountain landscape',
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcROHqfjDC6tC2haATRs3-EDemIzD3cMraKzQtaawteqjZqBzTZB',
      alt: 'Ocean waves',
    },
    {
      url: 'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop&q=60',
      alt: 'Desert sunset',
    },
  ];

  // Handle index change from viewer navigation
  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle viewer open/close
  const handleOpenChange = (open: boolean) => {
    setIsViewerOpen(open);
  };

  // Calendar states
  const [singleDate, setSingleDate] = useState(new Date());
  const [dateRange, setDateRange] = useState<{ from: Date; to?: Date }>({
    from: new Date(),
    to: undefined,
  });
  const [multipleDates, setMultipleDates] = useState<Date[]>([]);

  // Properly typed handlers for calendar
  const handleSingleDateChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (value instanceof Date) {
      setSingleDate(value);
    }
  };

  const handleDateRangeChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (value && typeof value === 'object' && 'from' in value) {
      setDateRange(value as { from: Date; to?: Date });
    }
  };

  const handleMultipleDatesChange = (value: Date | Date[] | { from: Date; to?: Date }) => {
    if (Array.isArray(value)) {
      setMultipleDates(value);
    }
  };
>>>>>>> main-v4-alpha-new-components

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-background">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <View className="p-4 gap-6">
          {/* Header */}
          <VStack space="sm">
            <Heading size="2xl">gluestack-ui Components</Heading>
            <Text className="text-typography-500">
              Interactive demos for Image Viewer and Calendar
            </Text>
          </VStack>

          {/* Image Viewer Demo */}
          <VStack space="sm">
            <Heading size="lg">Image Viewer</Heading>
            <Text className="text-typography-500 text-sm mb-2">
              Tap to open with zoom, swipe & dismiss
            </Text>
            <ImageViewer
              images={images}
              isOpen={isViewerOpen}
              onOpenChange={handleOpenChange}
              onIndexChange={handleIndexChange}
              initialIndex={currentIndex}
            >
              <ImageViewerTrigger>
                <Image
                  source={{ uri: images[currentIndex].url }}
                  alt={images[currentIndex].alt}
                  className="w-full h-64 rounded-lg"
                  resizeMode="cover"
                />
              </ImageViewerTrigger>
              <ImageViewerContent>
                <ImageViewerCloseButton />
                <ImageViewerNavigation />
                <ImageViewerCounter />
              </ImageViewerContent>
            </ImageViewer>
          </VStack>

          {/* Calendar - Single Date */}
          <VStack space="sm">
            <Heading size="lg">Calendar - Single Date</Heading>
            <Text className="text-typography-500 text-sm mb-2">
              Select a single date
            </Text>
            <Calendar
          mode="single"
          value={singleDate}
          onValueChange={handleSingleDateChange}
        >
          <CalendarHeader>
            <CalendarHeaderPrevButton>
              <Icon as={ChevronLeftIcon} className="w-5 h-5" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderTitle />
            <CalendarHeaderNextButton>
              <Icon as={ChevronRightIcon} className="w-5 h-5" />
            </CalendarHeaderNextButton>
          </CalendarHeader>
          <CalendarWeekDaysHeader />
          <CalendarBody>
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
        <Text className="text-sm text-typography-700 mt-2">
          Selected: {singleDate.toLocaleDateString()}
        </Text>
          </VStack>

          {/* Calendar - Date Range */}
          <VStack space="sm">
            <Heading size="lg">Calendar - Date Range</Heading>
            <Text className="text-typography-500 text-sm mb-2">
              Select start and end dates
            </Text>
            <Calendar
          mode="range"
          value={dateRange}
          onValueChange={handleDateRangeChange}
        >
          <CalendarHeader>
            <CalendarHeaderPrevButton>
              <Icon as={ChevronLeftIcon} className="w-5 h-5" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderTitle />
            <CalendarHeaderNextButton>
              <Icon as={ChevronRightIcon} className="w-5 h-5" />
            </CalendarHeaderNextButton>
          </CalendarHeader>
          <CalendarWeekDaysHeader />
          <CalendarBody>
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
        <Text className="text-sm text-typography-700 mt-2">
          From: {dateRange.from?.toLocaleDateString() || 'Not selected'}
          {'\n'}
          To: {dateRange.to?.toLocaleDateString() || 'Not selected'}
        </Text>
          </VStack>

          {/* Calendar - Multiple Dates */}
          <VStack space="sm">
            <Heading size="lg">Calendar - Multiple Dates</Heading>
            <Text className="text-typography-500 text-sm mb-2">
              Select multiple dates
            </Text>
            <Calendar
          mode="multiple"
          value={multipleDates}
          onValueChange={handleMultipleDatesChange}
        >
          <CalendarHeader>
            <CalendarHeaderPrevButton>
              <Icon as={ChevronLeftIcon} className="w-5 h-5" />
            </CalendarHeaderPrevButton>
            <CalendarHeaderTitle />
            <CalendarHeaderNextButton>
              <Icon as={ChevronRightIcon} className="w-5 h-5" />
            </CalendarHeaderNextButton>
          </CalendarHeader>
          <CalendarWeekDaysHeader />
          <CalendarBody>
            <CalendarGrid />
          </CalendarBody>
        </Calendar>
        <Text className="text-sm text-typography-700 mt-2">
          Selected {multipleDates.length} date(s)
        </Text>
          </VStack>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
