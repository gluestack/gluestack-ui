'use client';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { View } from '@/components/ui/view';
import { SocialMediaTestimonial } from './SocialMediaTestimonial';
import { data } from './content';
import { TestimonialsCarousel } from '../TestimonialsCarousel';

export const SocialMediaGridTestimonial = () => {
  return (
    <VStack className="bg-background-0 mt-40">
      <Box className="gap-2 md:gap-3 mb-10 md:mb-20">
        <Heading className="text-3xl md:text-4xl  ">
          Public Cheers for Us!
        </Heading>
        <Text className="  md:text-base">
          Find out how our users are spreading the word!
        </Text>
      </Box>
      <TestimonialsCarousel testimonials={data} />
      {/* @ts-ignore */}
      <View className="gap-5 web:md:grid-cols-2 web:lg:grid-cols-3 relative pb-[54px] hidden xl:web:grid">
        {data.map((data, index) => (
          <SocialMediaTestimonial {...data} key={index} />
        ))}
      </View>
    </VStack>
  );
};
