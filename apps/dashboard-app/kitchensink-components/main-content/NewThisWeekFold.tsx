import React, { useRef, useState, useContext } from "react";
import {
  Box,
  HStack,
  Center,
  Image,
  Icon,
  Pressable,
} from "../../components/ui";
import { ScrollView } from "react-native";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { ThemeContext } from "../../App";

const data = [
  {
    src: require("../../assets/display/image1.png"),
  },
  {
    src: require("../../assets/display/image2.png"),
  },

  {
    src: require("../../assets/display/image4.png"),
  },
  // {
  //   src: require("../../assets/display/image5.png"),
  // },
  {
    src: require("../../assets/display/image6.png"),
  },
  // {
  //   src: require("../../assets/display/image7.png"),
  // },
  {
    src: require("../../assets/display/image8.png"),
  },
  // {
  //   src: require("../../assets/display/image9.png"),
  // },
  {
    src: require("../../assets/display/image10.png"),
  },
  {
    src: require("../../assets/display/image3.png"),
  },
  {
    src: require("../../assets/display/image11.png"),
  },
  {
    src: require("../../assets/display/image12.png"),
  },
  {
    src: require("../../assets/display/image13.png"),
  },
  {
    src: require("../../assets/display/image14.png"),
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
    <Box className="w-full">
      <ScrollView
        horizontal
        style={{ width: "100%" }}
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
        <HStack space="md" className="w-full px-4 md:px-0">
          {data.map((image, index) => {
            return (
              <Box key={index} className="flex-1">
                <Image
                  source={image.src}
                  alt={"place" + index}
                  // @ts-ignore
                  className="w-64 h-64 rounded-md"
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
  const { colorMode } = useContext(ThemeContext);
  return (
    <Center className="absolute left-0 h-full hidden md:flex">
      <Pressable
        className={`p-1 ml-3 rounded-full border-outline-300 border bg-background-50 md:-ml-[16px] hover:bg-background-100 ${
          disabled
            ? "data-[disabled=true]:opacity-0"
            : "data-[disabled=true]:opacity-100"
        }`}
        disabled={disabled}
        onPress={handleScrollLeft}
      >
        <Icon
          as={ChevronLeft}
          size="lg"
          color={colorMode === "light" ? "#535252" : "#DCDBDB"}
        />
      </Pressable>
    </Center>
  );
};

const ScrollRight = ({ handleScrollRight, disabled }: any) => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Center className="absolute right-0 h-full hidden md:flex">
      <Pressable
        className={`p-1 ml-3 rounded-full border-outline-300 border bg-background-50 md:-mr-4 hover:bg-background-100 ${
          disabled
            ? "data-[disabled=true]:opacity-0"
            : "data-[disabled=true]:opacity-100"
        }`}
        onPress={handleScrollRight}
        disabled={disabled}
      >
        <Icon
          as={ChevronRight}
          size="lg"
          color={colorMode === "light" ? "#535252" : "#DCDBDB"}
        />
      </Pressable>
    </Center>
  );
};

export default NewThisWeekFold;
