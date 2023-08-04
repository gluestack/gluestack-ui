import React, { useEffect } from 'react';
// import { StatusBar, Platform } from 'react-native';
import { Heading } from '../gluestack-ui-components';
// import MobileBottomTabs from './MobileBottomTabs';
// import MobileModeChangeButton from './MobileModeChangeButton';
// import {
//   Plus,
//   Home,
//   MessageCircle,
//   User,
//   SlidersHorizontal,
// } from 'lucide-react-native';
// import MobileProfilePage from './MobileProfilePage';
// import Explorepage from './ExplorePage';

// const bottomTabs = [
//   {
//     icon: Home,
//     label: 'Home',
//   },
//   {
//     icon: SlidersHorizontal,
//     label: 'Filter',
//   },
//   {
//     icon: Plus,
//     label: 'Listing',
//   },
//   {
//     icon: MessageCircle,
//     label: 'Inbox',
//     disabled: true,
//   },
//   {
//     icon: User,
//     label: 'Profile',
//   },
// ];

const HomestayPage = () => {
  // useEffect(() => {
  //   if (Platform.OS === 'web') {
  //     document.body.style.overflow = 'hidden';
  //     document.body.style.height = '100%';
  //   }
  // }, []);

  // const [activeTab, setActiveTab] = React.useState('Home');

  return <Heading size="xl">Heading inside homepage</Heading>;
  // return (
  //   <Explorepage
  //     // modalVisible={modalVisible}
  //     // setModalVisible={setModalVisible}
  //     setActiveTab={setActiveTab}
  //     activeTab={activeTab}
  //   />
  // );
  // return (
  //   <Box
  //     flex={1}
  //     sx={{
  //       _light: { bg: 'white' },
  //       _dark: { bg: '$backgroundDark950' },
  //     }}
  //   >
  //     {/* <StatusBar
  //       // @ts-ignore
  //       style={
  //         {
  //           // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
  //         }
  //       }
  //     /> */}

  //     <Box flex={1}>
  //       {/* <MobileProfilePage isActive={activeTab === 'Profile'} /> */}
  //       <>
  //         <Explorepage
  //           // modalVisible={modalVisible}
  //           // setModalVisible={setModalVisible}
  //           setActiveTab={setActiveTab}
  //           activeTab={activeTab}
  //         />
  //       </>
  //       {/* )} */}
  //       {/* <MobileModeChangeButton /> */}
  //     </Box>
  //     {/* mobile bottom tabs */}
  //     {/* <Box
  //       h={72}
  //       alignItems="center"
  //       w="100%"
  //       sx={{
  //         '@md': {
  //           display: 'none',
  //         },
  //         '_dark': { borderColor: '$borderDark900' },
  //       }}
  //       borderTopWidth="$1"
  //       borderColor="$borderLight50"
  //     >
  //       <MobileBottomTabs
  //         activeTab={activeTab}
  //         setActiveTab={setActiveTab}
  //         bottomTabs={bottomTabs}
  //       />
  //     </Box> */}
  //   </Box>
  // );
};
export default HomestayPage;
