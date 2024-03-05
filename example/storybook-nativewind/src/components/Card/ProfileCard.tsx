// import React from 'react';
// import {
//   Card,
//   Text,
//   Box,
//   VStack,
//   Heading,
//   Avatar,
//   AvatarFallbackText,
//   AvatarImage,
//   Image,
//   Button,
//   ButtonText,
//   Divider,
// } from '@gluestack-ui/themed';

// const ProfileCard = () => {
//   return (
//     <Card p="$6" borderRadius="$lg" maxWidth={360}>
//       <Box flexDirection="row">
//         <Avatar mr="$4">
//           <AvatarFallbackText fontFamily="$heading">JD</AvatarFallbackText>
//           <AvatarImage
//             source={{
//               uri: 'https://images.unsplash.com/photo-1620403724159-40363e84a155?q=80&w=2646&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//             }}
//           />
//         </Avatar>
//         <VStack>
//           <Heading size="md" fontFamily="$heading" mb="$1">
//             Jane Doe
//           </Heading>
//           <Text size="sm" fontFamily="$heading">
//             janedoe@sample.com
//           </Text>
//         </VStack>
//       </Box>
//       <Box
//         my="$5"
//         sx={{
//           'flexDirection': 'column',
//           '@sm': {
//             my: '$6',
//             flexDirection: 'row',
//           },
//         }}
//       >
//         <VStack
//           alignItems="center"
//           sx={{
//             'pb': '$2',
//             '@sm': {
//               flex: 1,
//               pb: '$0',
//               borderRightWidth: 1,
//               borderColor: '$backgroundLight300',
//               _dark: {
//                 borderRightColor: '$backgroundDark800',
//               },
//             },
//           }}
//         >
//           <Heading size="xs" fontFamily="$heading">
//             81
//           </Heading>
//           <Text size="xs">posts</Text>
//         </VStack>
//         <Divider
//           orientation="horizontal"
//           width="40%"
//           alignSelf="center"
//           sx={{
//             'bg': '$backgroundLight300',
//             'display': 'flex',
//             '_dark': {
//               bg: '$backgroundDark800',
//             },
//             '@sm': {
//               display: 'none',
//             },
//           }}
//         />
//         <VStack
//           alignItems="center"
//           sx={{
//             'py': '$2',
//             '@sm': {
//               flex: 1,
//               py: '$0',
//               borderRightWidth: 1,
//               borderColor: '$backgroundLight300',
//               _dark: {
//                 borderRightColor: '$backgroundDark800',
//               },
//             },
//           }}
//         >
//           <Heading size="xs" fontFamily="$heading">
//             5,281
//           </Heading>
//           <Text size="xs">followers</Text>
//         </VStack>
//         <Divider
//           orientation="horizontal"
//           width="40%"
//           alignSelf="center"
//           sx={{
//             'bg': '$backgroundLight300',
//             'display': 'flex',
//             '_dark': {
//               bg: '$backgroundDark800',
//             },
//             '@sm': {
//               display: 'none',
//             },
//           }}
//         />
//         <VStack
//           alignItems="center"
//           sx={{
//             'pt': '$2',
//             '@sm': {
//               flex: 1,
//               pt: '$0',
//             },
//           }}
//         >
//           <Heading size="xs" fontFamily="$heading">
//             281
//           </Heading>
//           <Text size="xs">following</Text>
//         </VStack>
//       </Box>
//       <Box
//         mb="$5"
//         sx={{
//           'flexDirection': 'column',
//           '@sm': {
//             mb: '$6',
//             flexDirection: 'row',
//           },
//         }}
//       >
//         <Image
//           mb="$3"
//           borderRadius="$md"
//           sx={{
//             'width': '$full',
//             'height': 140,
//             '@sm': {
//               mb: '$0',
//               mr: '$3',
//               width: 150,
//               height: 154,
//             },
//           }}
//           source={{
//             uri: 'https://images.unsplash.com/photo-1592089416462-2b0cb7da8379?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           }}
//         />
//         <Image
//           borderRadius="$md"
//           sx={{
//             'width': '$full',
//             'height': 140,
//             '@sm': {
//               width: 150,
//               height: 154,
//             },
//           }}
//           source={{
//             uri: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=2425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//           }}
//         />
//       </Box>
//       <Button py="$2" px="$4">
//         <ButtonText size="sm">Follow</ButtonText>
//       </Button>
//     </Card>
//   );
// };

// export default ProfileCard;
