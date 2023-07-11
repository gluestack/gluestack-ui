import React, { useRef, useState } from 'react';
import {
  Box,
  HStack,
  Image,
  Center,
  Icon,
  Pressable,
} from '../../gluestack-ui-components';
import { ScrollView } from 'react-native';
import { ChevronLeft, ChevronRight, Scroll } from 'lucide-react-native';

const data = [
  {
    src: require('../../assets/display/image1.png'),
  },
  {
    src: require('../../assets/display/image2.png'),
  },
  // {
  //   src: require('../../assets/display/image3.png'),
  // },
  {
    src: require('../../assets/display/image4.png'),
  },
  // {
  //   src: require("../../assets/display/image5.png"),
  // },
  {
    src: require('../../assets/display/image6.png'),
  },
  // {
  //   src: require("../../assets/display/image7.png"),
  // },
  {
    src: require('../../assets/display/image8.png'),
  },
  // {
  //   src: require("../../assets/display/image9.png"),
  // },
  {
    src: require('../../assets/display/image10.png'),
  },
  {
    src: require('../../assets/display/image11.png'),
  },
  {
    src: require('../../assets/display/image12.png'),
  },
  {
    src: require('../../assets/display/image13.png'),
  },
  {
    src: require('../../assets/display/image14.png'),
  },
  // {
  //   src: require("../../assets/display/image15.png"),
  // },
];

const NewThisWeekFold = () => {
  const scrollViewRef = useRef(null);
  const scrollAmount = 400;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isContentAtRight, setIsContentAtRight] = useState(true);

  const handleScrollLeft = () => {
    const newScrollPosition = scrollPosition - scrollAmount;
    if (scrollViewRef.current) {
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
      setScrollPosition(newScrollPosition);
    }
  };

  const handleScrollRight = () => {
    const newScrollPosition = scrollPosition + scrollAmount;
    if (scrollViewRef.current)
      // @ts-ignore
      scrollViewRef?.current?.scrollTo({
        x: newScrollPosition,
        animated: true,
      });
    setScrollPosition(newScrollPosition);
  };

  const checkContentAtLeft = () => {
    if (scrollPosition > 0) {
      return true;
    }
    return false;
  };

  const isCloseToRight = (event: any) => {
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isScrollAtEnd =
      contentOffset.x + layoutMeasurement.width >= contentSize.width;
    if (isScrollAtEnd) {
      return true;
    }
    return false;
  };

  return (
    <Box w="100%">
      <ScrollView
        horizontal
        style={{ width: '100%' }}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEventThrottle={50}
        onScroll={(event) => {
          if (isCloseToRight(event)) {
            setIsContentAtRight(false);
          } else {
            setIsContentAtRight(true);
          }
          setScrollPosition(event.nativeEvent.contentOffset.x);
        }}
      >
        <HStack space="md" width="100%" px="$4" sx={{ '@md': { px: '$0' } }}>
          {data.map((image, index) => {
            return (
              <Box key={index} flex={1}>
                <Image
                  source={image.src}
                  alt={'place' + index}
                  h="$64"
                  w="$64"
                  // @ts-ignore
                  borderRadius="$md"
                  resizeMode="cover"
                />
              </Box>
            );
          })}
        </HStack>
      </ScrollView>
      <ScrollLeft
        handleScrollLeft={handleScrollLeft}
        disabled={!checkContentAtLeft()}
      />
      <ScrollRight
        handleScrollRight={handleScrollRight}
        disabled={!isContentAtRight}
      />
    </Box>
  );
};

const ScrollLeft = ({ handleScrollLeft, disabled }: any) => {
  return (
    <Center
      position="absolute"
      left="$0"
      h="100%"
      display="none"
      sx={{
        '@md': {
          display: 'flex',
        },
      }}
    >
      <Pressable
        p="$1"
        ml="$3"
        borderRadius="$full"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          '@md': {
            ml: -16,
          },
          ':hover': {
            bg: '$backgroundLight100',
          },
          '_dark': {
            'bg': '$backgroundDark900',
            'borderColor': '$borderDark600',
            ':hover': {
              bg: '$backgroundDark800',
            },
          },
          'opacity': disabled ? 0 : 1,
          // _web: {
          //   cursor: "not-allowed",
          // },
        }}
        disabled={disabled}
        onPress={handleScrollLeft}
      >
        <Icon
          as={ChevronLeft}
          size="lg"
          color="$backgroundLight700"
          sx={{
            _dark: {
              color: '$backgroundDark300',
            },
          }}
        />
      </Pressable>
    </Center>
  );
};

const ScrollRight = ({ handleScrollRight, disabled }: any) => {
  return (
    <Center
      position="absolute"
      right="$0"
      h="100%"
      display="none"
      sx={{
        '@md': {
          display: 'flex',
        },
      }}
    >
      <Pressable
        p="$1"
        mr="$3"
        borderRadius="$full"
        borderColor="$borderLight300"
        borderWidth="$1"
        bg="$backgroundLight50"
        sx={{
          '@md': {
            mr: '-$4',
          },
          ':hover': {
            bg: '$backgroundLight100',
          },
          '_dark': {
            'bg': '$backgroundDark900',
            'borderColor': '$borderDark600',
            ':hover': {
              bg: '$backgroundDark800',
            },
          },
          'opacity': disabled ? 0 : 1,
        }}
        onPress={handleScrollRight}
        disabled={disabled}
      >
        <Icon
          as={ChevronRight}
          size="lg"
          color="$backgroundLight700"
          sx={{
            _dark: {
              color: '$backgroundDark300',
            },
          }}
        />
      </Pressable>
    </Center>
  );
};

export default NewThisWeekFold;
