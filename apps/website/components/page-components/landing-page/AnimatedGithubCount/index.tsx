'use client';
import React from 'react';
// import { AnimatePresence, Motion } from '@legendapp/motion';
import { Text } from '@/components/ui/text';
// import { Box, HStack, Center, Pressable } from '@/components';
import { Skeleton } from '@/components/ui/skeleton';

// const StyledAnimatedText = Motion.View;

// const AnimationLayout = ({ children, ...props }) => {
//   return (
//     <Center className="flex flex-row bg-background " {...props}>
//       {children}
//     </Center>
//   );
// };

// const AnimatedTextComp = ({ children, ...props }) => {
//   return (
//     <StyledAnimatedText
//       className="text-md text-foreground selection:text-background-0 select-none  text-center absolute left-0"
//       {...props}
//     >
//       {children}
//     </StyledAnimatedText>
//   );
// };

async function fetchGitHubStars() {
  const owner = 'gluestack';
  const repo = 'gluestack-ui';
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return 0;
    }
    const data = await response.json();
    const stars = data.stargazers_count;
    return stars.toLocaleString();
  } catch (error) {
    return 0;
  }
}

const Ticker = ({ h = '95vh', ...props }) => {
  //   const [countOne, setCountOne] = React.useState(9);
  //   const [countTwo, setCountTwo] = React.useState(3);
  //   const [countThree, setCountThree] = React.useState(6);
  //   const [countFour, setCountFour] = React.useState(8);
  const [starsCount, setStarsCount] = React.useState(0);

  React.useEffect(() => {
    // setInterval(() => {

    // //   setCountTwo((prev) => {
    // //     if (prev === 0) {
    // //       return 9;
    // //     } else {
    // //       return prev - 1;
    // //     }
    // //   });
    // //   setCountThree((prev) => {
    // //     if (prev === 0) {
    // //       return 9;
    // //     } else {
    // //       return prev - 1;
    // //     }
    // //   });
    // //   setCountFour((prev) => {
    // //     if (prev === 0) {
    // //       return 9;
    // //     } else {
    // //       return prev - 1;
    // //     }
    // //   });
    // }, 2000);

    // setTimeout(async () => {
    fetchGitHubStars().then((data) => {
      setStarsCount(data);
    });
    // }, 2000);
  }, []);

  if (starsCount === 0) {
    return (
      <Skeleton variant="sharp" className="h-[15px] w-[40px] rounded-sm" />
    );
  } else {
    return (
      <Text className={`text-md text-foreground font-medium`}>
        {starsCount}
      </Text>
    );
  }
  //   return (
  //     <>
  //       {starsCount !== 0 ? (
  //         <Text className={`text-md text-foreground font-medium`}>
  //           {starsCount}
  //         </Text>
  //       ) : (
  //         <Skeleton variant="rounded" className="h-[20px] w-[50px]" />
  //         // <AnimationLayout>
  //         //   <Box className="w-[10px] justify-center overflow-hidden  min-h-[35px] items-center relative">
  //         //     <AnimatePresence>
  //         //       <AnimatedTextComp
  //         //         exit={{
  //         //           opacity: 0,
  //         //           y: 100,
  //         //         }}
  //         //         initial={{
  //         //           opacity: 0,
  //         //           y: -100,
  //         //         }}
  //         //         animate={{
  //         //           opacity: 1,
  //         //           y: 0,
  //         //         }}
  //         //         transition={{
  //         //           duration: 1000,
  //         //         //   delay: 100,
  //         //           type: 'timing',
  //         //         }}
  //         //         style={{
  //         //           WebkitTouchCallout: 'none',
  //         //           WebkitUserSelect: 'none',
  //         //           KhtmlUserSelect: 'none',
  //         //           MozUserSelect: 'none',
  //         //           msUserSelect: 'none',
  //         //           userSelect: 'none',
  //         //         }}
  //         //       >
  //         //         {countOne}
  //         //       </AnimatedTextComp>
  //         //     </AnimatePresence>
  //         //   </Box>

  //         //   {/* <Box className="w-[10px] justify-center overflow-hidden  min-h-[15px] items-center relative">
  //         //     <AnimatePresence>
  //         //       <AnimatedTextComp
  //         //         exit={{
  //         //           opacity: 0,
  //         //           y: countThree < countTwo ? 100 : -100,
  //         //         }}
  //         //         initial={{
  //         //           opacity: 0,
  //         //           y: countThree < countTwo ? -100 : 100,
  //         //         }}
  //         //         animate={{
  //         //           opacity: 1,
  //         //           y: 0,
  //         //         }}
  //         //         transition={{
  //         //           duration: 300,
  //         //           delay: 100,
  //         //           type: 'timing',
  //         //         }}
  //         //         style={{
  //         //           WebkitTouchCallout: 'none',
  //         //           WebkitUserSelect: 'none',
  //         //           KhtmlUserSelect: 'none',
  //         //           MozUserSelect: 'none',
  //         //           msUserSelect: 'none',
  //         //           userSelect: 'none',
  //         //         }}
  //         //       >
  //         //         {countTwo}
  //         //       </AnimatedTextComp>
  //         //     </AnimatePresence>
  //         //   </Box>
  //         //   <Box className="w-[10px] justify-center overflow-hidden  min-h-[15px] items-center relative">
  //         //     <AnimatePresence>
  //         //       <AnimatedTextComp
  //         //         exit={{
  //         //           opacity: 0,
  //         //           y: countFour < countThree ? 100 : -100,
  //         //         }}
  //         //         initial={{
  //         //           opacity: 0,
  //         //           y: countFour < countThree ? -100 : 100,
  //         //         }}
  //         //         animate={{
  //         //           opacity: 1,
  //         //           y: 0,
  //         //         }}
  //         //         transition={{
  //         //           duration: 300,
  //         //           delay: 100,
  //         //           type: 'timing',
  //         //         }}
  //         //         style={{
  //         //           WebkitTouchCallout: 'none',
  //         //           WebkitUserSelect: 'none',
  //         //           KhtmlUserSelect: 'none',
  //         //           MozUserSelect: 'none',
  //         //           msUserSelect: 'none',
  //         //           userSelect: 'none',
  //         //         }}
  //         //       >
  //         //         {countThree}
  //         //       </AnimatedTextComp>
  //         //     </AnimatePresence>
  //         //   </Box>
  //         //   <Box className="w-[10px] justify-center overflow-hidden  min-h-[15px] items-center relative">
  //         //     <AnimatePresence>
  //         //       <AnimatedTextComp
  //         //         exit={{
  //         //           opacity: 0,
  //         //           y: countOne < countFour ? 100 : -100,
  //         //         }}
  //         //         initial={{
  //         //           opacity: 0,
  //         //           y: countOne < countFour ? -100 : 100,
  //         //         }}
  //         //         animate={{
  //         //           opacity: 1,
  //         //           y: 0,
  //         //         }}
  //         //         transition={{
  //         //           duration: 300,
  //         //           delay: 100,
  //         //           type: 'timing',
  //         //         }}
  //         //         style={{
  //         //           WebkitTouchCallout: 'none',
  //         //           WebkitUserSelect: 'none',
  //         //           KhtmlUserSelect: 'none',
  //         //           MozUserSelect: 'none',
  //         //           msUserSelect: 'none',
  //         //           userSelect: 'none',
  //         //         }}
  //         //       >
  //         //         {countFour}
  //         //       </AnimatedTextComp>
  //         //     </AnimatePresence>
  //         //   </Box> */}
  //         // </AnimationLayout>
  //       )}
  //     </>
  //   );
};

export default Ticker;
