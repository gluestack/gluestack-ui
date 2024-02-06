import { RefreshControl as RNRefreshControl } from 'react-native';
import React from 'react';

const RefreshControl = React.forwardRef((props?: any, ref?: any) => {
  return <RNRefreshControl ref={ref} {...props} />;
});

RefreshControl.displayName = 'RefreshControl';

export { RefreshControl };
