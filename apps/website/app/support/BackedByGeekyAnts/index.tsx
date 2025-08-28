'use client';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Text } from '@/components/ui/text';
import CardInfo from '../CardInfo';

const data = [
  { icon: '/images/contact-us/technical.svg', name: 'Technical Issues' },
  { icon: '/images/contact-us/dashicons-update.svg', name: 'Upcoming Updates' },
  { icon: '/images/contact-us/question-fill.svg', name: 'Queries' },
];

const BackedByGeekyAnts = () => {
  return (
    <Box className="mb-20 md:mb-[140px]">
      <Box className="max-w-[777px] items-start mb-20">
        <Text className="text-4xl leading-[48px] font-bold my-0 md:text-5xl text-typography-900">
          Backed by GeekyAnts
        </Text>
        <Text className="text-xl leading-7 mt-3 text-typography-700">
          gluestack is an innovation by GeekyAnts — a design and development
          studio with proven success in multiple industries and domains.
        </Text>
      </Box>
      <Box className="lg:flex-row justify-between items-center">
        <CardInfo
          iconSrc="/images/right-circle.svg"
          value="700+"
          name="Projects"
        />
        <Divider className="w-full lg:w-[2px]  h-[1px] my-12  lg:h-16 rounded-full" />
        <CardInfo
          iconSrc="/images/users-circle.svg"
          value="500+"
          name="Client partnerships"
        />
        <Divider className="w-full lg:w-[2px] h-[1px] my-12  lg:h-16 rounded-full" />
        <CardInfo
          iconSrc="/images/handshake-circle.svg"
          value="30+"
          name="tech partners"
        />
      </Box>
    </Box>
  );
};

export default BackedByGeekyAnts;
