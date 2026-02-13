import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { SafeAreaView } from 'react-native-safe-area-context';
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
import { Input, InputField } from '@/components/ui/input';

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
        <ScrollView className="flex-1 bg-background">
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

          <Calendar
            mode="single"
            value={singleDate}
            onValueChange={setSingleDate}
          >
            <CalendarHeader>
              <CalendarHeaderPrevButton>
                <Icon as={ChevronLeftIcon} className="w-4 h-4" />
              </CalendarHeaderPrevButton>
              <CalendarHeaderTitle />
              <CalendarHeaderNextButton>
                <Icon as={ChevronRightIcon} className="w-4 h-4" />
              </CalendarHeaderNextButton>
            </CalendarHeader>
            <CalendarWeekDaysHeader />
            <CalendarBody>
              <CalendarGrid />
            </CalendarBody>
          </Calendar>
          <Text className="text-sm text-typography-700">
            Selected: {singleDate.toLocaleDateString()}
          </Text>
        </ScrollView>
     
    </SafeAreaView>
  );
}
