import React from 'react';
import { Box } from '../gluestack-ui-components';
import Sidebar from './Sidebar';

const WebSidebar = React.memo(() => {
  return (
    <Box
      flex={1}
      display="none"
      sx={{
        '@md': {
          display: 'flex',
          _web: {
            maxHeight: 'calc(100vh - 144px)',
          },
        },
      }}
      maxWidth={340}
      w="100%"
      pl="$12"
    >
      {/* common sidebar contents for web and mobile */}
      <Sidebar />
    </Box>
  );
});
export default WebSidebar;
