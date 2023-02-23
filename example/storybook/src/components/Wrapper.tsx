import React from 'react';

// import { Platform } from 'react-native';
// import { useDarkMode } from '../hooks/useDarkMode';

// window['setTheme'] = set;
// window['getTheme'] = get;
// const Wrapper = ({ children, ...props }: any) => {
// let value = false;
// // if (Platform.OS === 'web') {
// value = useDarkMode();
// // }
// // set(value ? 'dark' : 'light');
// // useEffect(() => {
// //   set('light');
// //   onChange((colorMode) => {
// //     setIsDark(colorMode == 'dark' ? true : false);
// //   });
// // }, []);
// const [isDark, setIsDark] = React.useState(false);

// function getColorMode() {
//   if (Platform.OS === 'web') {
//     return value ? 'dark' : 'light';
//   } else {
//     return isDark ? 'dark' : 'light';
//   }
// }

// return <>hello</>;
// return (
//   <AppProvider {...props} colorMode={getColorMode()}>
//     {/* <Center>{children}</Center> */}
//   </AppProvider>
// );
// };

// Wrapper.displayName = 'GluestackUIProvider';

import { config } from '../gluestack.config';
import { StyledProvider } from '@dank-style/react';
import { createProvider } from '@gluestack-ui/provider';
import { View } from 'react-native';

const Provider = createProvider({ StyledProvider }) as any;
Provider.displayName = 'Provider';

const Wrapper = ({ children }: any) => {
  return (
    <Provider config={config}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          height: '100%',
          width: '100%',
        }}
      >
        {children}
      </View>
    </Provider>
  );
};

export default Wrapper;
