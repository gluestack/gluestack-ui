import React, { useContext } from 'react';
import { Fab, Icon } from '../gluestack-ui-components';
import { Moon, Sun } from 'lucide-react-native';
import { ThemeContext } from '../App';

const MobileModeChangeButton = React.memo(() => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);

  return (
    <>
      <Fab
        sx={{
          '@md': {
            display: 'none',
          },
          '@base': {
            bottom: '$4',
            right: '$4',
          },
        }}
        onPress={toggleColorMode}
      >
        <Icon as={colorMode === 'light' ? Moon : Sun} fill="currentColor" />
      </Fab>
    </>
  );
});

export default MobileModeChangeButton;
