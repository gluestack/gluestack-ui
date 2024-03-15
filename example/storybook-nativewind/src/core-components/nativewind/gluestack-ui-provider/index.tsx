import React from 'react';
import { Platform, View } from 'react-native';

// Change the config file path
import { config } from './config';

const providerStyle = Platform.select({
  web: {
    flex: 1,
    height: '100vh',
    width: '100%',
  },
  android: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  ios: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export function GluestackUIProvider({
  mode = 'light',

  ...props
}: {
  mode: 'light' | 'dark';
  children: any;
}) {
  if (Platform.OS === 'web' && config[mode] && document) {
    const element = document.documentElement;
    if (element) {
      const head = element.querySelector('head');
      const style = document.createElement('style');
      const stringcssvars = Object.keys(config[mode]).reduce((acc, cur) => {
        acc += `${cur}:${config[mode][cur]};`;
        return acc;
      }, '');
      style.innerHTML = `:root {${stringcssvars}} `;
      if (head) head.appendChild(style);
    }

    return props.children;
  }

  return (
    <View
      style={[
        config[mode],
        providerStyle,
        // @ts-ignore
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
