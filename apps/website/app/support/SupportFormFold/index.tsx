'use client';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import NextImage from 'next/image';
import { useEffect } from 'react';

const data = [
  { icon: '/images/contact-us/technical.svg', name: 'Technical Issues' },
  { icon: '/images/contact-us/dashicons-update.svg', name: 'Upcoming Updates' },
  { icon: '/images/contact-us/question-fill.svg', name: 'Queries' },
];

const SupportFormFold = () => {
  const url = '//js.hsforms.net/forms/embed/v2.js';
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    script.addEventListener('load', () => {
      // @ts-ignore
      if (window.hbspt) {
        // @ts-ignore
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '22599506',
          formId: '98f32a32-f91f-448a-a278-462553b0f478',
          target: '#formcss',
        });
      }
    });
  }, []);

  return (
    <Box className="pt-20 mt-56 xl:mt-24">
      <Box className="items-center lg:flex-row">
        <VStack className="justify-center mb-16 sm:mx-auto lg:w-[60%] lg:pr-2 lg:mb-0 max-w-[1000px]">
          <Heading className="font-bold leading-[48px] max-w-[750px] my-0 text-4xl md:text-6xl md:leading-[72px] lg:mx-0 text-typography-900">
            How Can We Help?
          </Heading>
          <Text className="text-typography-700 leading-8 mt-2 text-2xl max-w-[750px]">
            If you are using gluestack and are facing issues, you can ask our
            Geeks for direct support here.
          </Text>

          <Box className="gap-6 mt-8 sm:flex-row flex-wrap">
            <Text className="text-typography-700 text-xl leading-7 font-medium">
              ASK ABOUT
            </Text>
            {data.map((item, index) => (
              <HStack className="gap-2 items-center" key={index}>
                <NextImage
                  src={item.icon}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  alt={item.name + 'image'}
                />
                <Text className="text-typography-700 text-xl leading-7 font-medium">
                  {item.name}
                </Text>
              </HStack>
            ))}
            <Text className="text-typography-700 text-xl leading-7 font-medium">
              + more
            </Text>
          </Box>
        </VStack>

        <Box className="flex-1 relative rounded-xl overflow-hidden border border-outline-50">
          <Text className="text-2xl leading-8 font-medium absolute top-[42px] left-[42px] text-white">
            Contact gluestack Support
          </Text>

          <div className="px-5 pt-4 pb-5" id="formcss" />
        </Box>
      </Box>
    </Box>
  );
};

export default SupportFormFold;
