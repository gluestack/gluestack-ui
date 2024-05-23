import React from 'react';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
// import { addParameters } from '@storybook/client-api';
import { GluestackUIProvider } from '../../storybook-nativewind/src/core-components/nativewind';

import { View } from 'react-native';
import { useState } from 'react';
import type { Preview } from '@storybook/react';
// import { useDarkMode } from '../../storybook-nativewind/src/components/hooks/useDarkMode';
// import { Platform } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => {
      let value = false;

      // if (Platform.OS === 'web') {
      //   // eslint-disable-next-line react-hooks/rules-of-hooks
      //   value = useDarkMode();
      // }
      const [isDark] = useState(false);

      return (
        <GluestackUIProvider mode="light">
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Story />
          </View>
        </GluestackUIProvider>
      );
    },
  ],

  parameters: {
    backgrounds: {
      default: 'plain',
      values: [
        { name: 'plain', value: 'white' },
        { name: 'warm', value: 'hotpink' },
        { name: 'cool', value: 'deepskyblue' },
      ],
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

// export const decorators = [
//   withBackgrounds,
//   (Story) => {
//     let value = false;

//     if (Platform.OS === 'web') {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       value = useDarkMode();
//     }
//     const [isDark] = useState(false);

//     return (
//       <GluestackUIProvider>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingLeft: 10,
//             backgroundColor: 'red',
//           }}
//         >
//           <Story />
//         </View>
//       </GluestackUIProvider>
//     );
//   },
// ];

// addParameters({
//   docs: {
//     container: ({ children, context }) => {
//       let value = false;

//       if (Platform.OS === 'web') {
//         // eslint-disable-next-line react-hooks/rules-of-hooks
//         value = useDarkMode();
//       }
//       const [isDark] = useState(false);

//       function getColorMode() {
//         //@ts-ignore
//         if (Platform.OS === 'web') {
//           return value ? 'dark' : 'light';
//         } else {
//           return isDark ? 'dark' : 'light';
//         }
//       }
//       return (
//         <DocsContainer context={context}>
//           <GluestackUIProvider config={config} colorMode={getColorMode()}>
//             {children}
//           </GluestackUIProvider>
//         </DocsContainer>
//       );
//     },
//   },
// });

export default preview;
