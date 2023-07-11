import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { Box } from '../gluestack-ui-components';
import MobileBottomTabs from './MobileBottomTabs';
import MobileModeChangeButton from './MobileModeChangeButton';
import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from 'lucide-react-native';
import MobileProfilePage from './MobileProfilePage';
import Explorepage from './ExplorePage';
import MobileSidebarActionsheet from './MobileSidebarActionsheet';

const bottomTabs = [
  {
    icon: Home,
    label: 'Home',
  },
  {
    icon: SlidersHorizontal,
    label: 'Filter',
  },
  {
    icon: Plus,
    label: 'Listing',
  },
  {
    icon: MessageCircle,
    label: 'Inbox',
    disabled: true,
  },
  {
    icon: User,
    label: 'Profile',
  },
];

const HomestayPage = ({ colorMode, toggleColorMode }: any) => {
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
    }
  }, []);

  const [activeTab, setActiveTab] = React.useState('Home');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [actionsheetVisible, setActionsheetVisible] = React.useState(false);

  return (
    <Box
      flex={1}
      sx={{
        _light: { bg: 'white' },
        _dark: { bg: '$backgroundDark950' },
      }}
    >
      <StatusBar
        // @ts-ignore
        style={
          {
            // backgroundColor: colorMode === "light" ? "#E5E5E5" : "#262626",
          }
        }
      />

      <Box flex={1}>
        {/* profile page for mobile */}
        {activeTab === 'Profile' ? (
          <MobileProfilePage />
        ) : (
          <>
            <Explorepage
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              setActiveTab={setActiveTab}
              activeTab={activeTab}
            />
            <MobileSidebarActionsheet
              actionsheetVisible={actionsheetVisible}
              setActionsheetVisible={setActionsheetVisible}
            />
          </>
        )}
        <MobileModeChangeButton
          colorMode={colorMode}
          toggleColorMode={toggleColorMode}
        />
      </Box>
      {/* mobile bottom tabs */}
      <Box
        h={72}
        alignItems="center"
        w="100%"
        sx={{
          '@md': {
            display: 'none',
          },
          '_dark': { borderColor: '$borderDark900' },
        }}
        borderTopWidth="$1"
        borderColor="$borderLight50"
      >
        <MobileBottomTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          bottomTabs={bottomTabs}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          actionsheetVisible={actionsheetVisible}
          setActionsheetVisible={setActionsheetVisible}
        />
      </Box>
    </Box>
  );
};
export default HomestayPage;
