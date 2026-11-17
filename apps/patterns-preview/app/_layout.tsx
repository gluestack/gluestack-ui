import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Slot, useGlobalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type Mode = 'light' | 'dark';

// The website embeds each pattern in an iframe: /preview/<slug>?theme=dark.
// It can also switch the theme live with postMessage({ type: 'gluestack:theme', mode }).
export default function RootLayout() {
  const params = useGlobalSearchParams<{ theme?: string }>();
  const [mode, setMode] = useState<Mode>(params.theme === 'light' ? 'light' : 'dark');

  useEffect(() => {
    if (params.theme === 'light' || params.theme === 'dark') setMode(params.theme);
  }, [params.theme]);

  useEffect(() => {
    if (Platform.OS !== 'web') return;
    const onMessage = (e: MessageEvent) => {
      const d = e.data;
      if (d && d.type === 'gluestack:theme' && (d.mode === 'light' || d.mode === 'dark')) setMode(d.mode);
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <GluestackUIProvider mode={mode}>
          <Slot />
        </GluestackUIProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
