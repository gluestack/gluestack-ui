import React from 'react';
import { Box, Actionsheet, Text } from '../gluestack-ui-components';
import Sidebar from './Sidebar';

const MobileSidebarActionsheet = React.memo(
  ({ actionsheetVisible, setActionsheetVisible }: any) => {
    const handleClose = () => {
      setActionsheetVisible(false);
    };

    React.useEffect(() => {
      console.endMount('Actionsheet');
    }, []);

    return (
      <Box w="100%" flex={1}>
        <Actionsheet isOpen={actionsheetVisible} onClose={handleClose}>
          <Actionsheet.Backdrop />
          <Actionsheet.Content
            sx={{
              _dark: {
                bg: '$backgroundDark950',
              },
            }}
          >
            <Box h="100%" w="100%">
              <Actionsheet.DragIndicatorWrapper>
                <Actionsheet.DragIndicator />
              </Actionsheet.DragIndicatorWrapper>
              <Actionsheet.ScrollView>
                <Sidebar />
              </Actionsheet.ScrollView>
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
    );
  }
);
export default MobileSidebarActionsheet;
