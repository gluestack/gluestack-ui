'use client';
import { useRef, useState } from 'react';
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Box } from '@/components/ui/box';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { FlatList } from '@/components/ui/flat-list';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { SocialMediaTestimonial } from '../Testimonials/SocialMediaTestimonial';

type Testimonial = {
  profileURI: string;
  authorName: string;
  profileName: string;
  testimonialContent: string;
};

type Props = {
  testimonials: Testimonial[];
};

export const TestimonialsCarousel = ({ testimonials }: Props) => {
  const flatListRef = useRef<FlatList>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentAtRight, setIsContentAtRight] = useState(true);
  const scrollAmount = 312;

  const handleScrollLeft = () => {
    const newScrollPosition = Math.max(scrollPosition - scrollAmount, 0);
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const checkContentAtLeft = () => {
    return scrollPosition > 0;
  };

  const isCloseToRight = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!event.nativeEvent) return false;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isScrollAtEnd =
      contentOffset?.x + layoutMeasurement?.width >= contentSize?.width - 1; // Slight offset to ensure accurate detection
    return isScrollAtEnd;
  };

  return (
    <Box className="bg-background items-center xl:hidden">
      <Box className="w-[100%] relative items-center">
        <FlatList
          horizontal
          //   contentContainerClassName="gap-6"
          ItemSeparatorComponent={() => <Box className="w-4" />}
          //@ts-ignore
          className="w-[100%] sm:max-w-[97%]"
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          data={testimonials}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Box className="w-[280px] min-h-[367px]">
              <SocialMediaTestimonial {...item} />
            </Box>
          )}
          onScroll={({ nativeEvent }) => {
            if (nativeEvent) {
              setScrollPosition(nativeEvent.contentOffset.x);
              //@ts-ignore
              setIsContentAtRight(!isCloseToRight({ nativeEvent }));
            }
          }}
          scrollEventThrottle={20} // Ensure smooth scrolling
        />
        <ScrollLeft
          handleScrollLeft={handleScrollLeft}
          disabled={!checkContentAtLeft()}
        />
        <ScrollRight
          handleScrollRight={handleScrollRight}
          disabled={!isContentAtRight}
        />
      </Box>
    </Box>
  );
};

const ScrollLeft = ({ handleScrollLeft, disabled }: any) => {
  return (
    <Box
      className={`absolute left-2  hidden sm:flex h-full w-9 ${
        disabled
          ? 'data-[disabled=true]:opacity-0'
          : 'data-[disabled=true]:opacity-100 bg-gradient-to-r dark:from-[#1d1c1d] from-[#fdfcfd] to-transparent '
      }`}
    >
      <Pressable
        className={`top-[45%] -left-10 p-2 rounded-full bg-muted hover:bg-muted/50 ${
          disabled
            ? 'data-[disabled=true]:opacity-0'
            : 'data-[disabled=true]:opacity-100 '
        }`}
        disabled={disabled}
        onPress={handleScrollLeft}
      >
        <Icon as={ChevronLeft} className="w-5 h-5" />
      </Pressable>
    </Box>
  );
};

const ScrollRight = ({ handleScrollRight, disabled }: any) => {
  return (
    <Box
      className={`absolute hidden right-2  h-full sm:flex w-9 ${
        disabled
          ? 'data-[disabled=true]:opacity-0'
          : 'data-[disabled=true]:opacity-100 bg-gradient-to-l dark:from-[#1d1c1d] from-[#fdfcfd] to-transparent '
      }`}
    >
      <Pressable
        className={`top-[45%] -right-10 p-2 rounded-full bg-muted hover:bg-muted/50  ${
          disabled
            ? 'data-[disabled=true]:opacity-0'
            : 'data-[disabled=true]:opacity-100 '
        }`}
        onPress={handleScrollRight}
        disabled={disabled}
      >
        <Icon as={ChevronRight} className="w-5 h-5 dark:text-background-800" />
      </Pressable>
    </Box>
  );
};
