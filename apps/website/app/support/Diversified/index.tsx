'use client';
import { Box, Text } from '@/components/ui';
import { ThemeContext } from '@/utils/context/theme-context';
import NextImage from 'next/image';
import { useContext } from 'react';

function Diversified() {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box className="mb-20 md:mb-[140px]">
      <Box className="max-w-[777px] items-start mb-20">
        <Text className="text-4xl leading-[48px] font-bold my-0 md:text-5xl text-typography-900">
          Diversified Industry Expertise
        </Text>
        <Text className="text-xl leading-7 mt-3 text-typography-700">
          Projects across multiple industries — manufacturing, automotive,
          e-commerce, social media, fintech, logistics, real estate, and others.
        </Text>
      </Box>
      <Box className="flex-wrap -m-2 flex-col items-start md:flex-row lg:justify-between gap-6">
        <NextImage
          src="/images/enterprise/pepperfry.svg"
          width={216}
          height={46}
          alt="pepperfry"
        />

        <NextImage
          src={
            colorMode === 'light'
              ? '/images/darden.png'
              : '/images/enterprise/darden.svg'
          }
          width={171}
          height={46}
          alt="darden"
        />

        <NextImage
          src="/images/enterprise/mpl.svg"
          width={113}
          height={46}
          alt="mpl"
        />

        <NextImage
          src={
            colorMode === 'light'
              ? '/images/atsign.svg'
              : '/images/enterprise/atsign.svg'
          }
          width={139}
          height={46}
          alt="atsign"
        />

        <NextImage
          src={
            colorMode === 'light'
              ? '/svg/icici_light.svg'
              : '/svg/icici_dark.svg'
          }
          width={214}
          height={46}
          alt="icici"
        />
      </Box>
    </Box>
  );
}

export default Diversified;
