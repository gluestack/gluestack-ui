import { Stack, useRouter } from 'expo-router';
import { Platform, Pressable } from 'react-native';
import { useAppTheme } from '@/contexts/app-theme-context';
import { Icon, ChevronLeftIcon } from '@/components/ui/icon';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Custom Header Component with NativeWind styling
function CustomHeader({ title }: { title: string }) {
  const { isDark } = useAppTheme();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <Box
      className=""
      style={{
        paddingTop: insets.top,
      }}
    >
      <Box className="absolute inset-0 bg-background" />

      <HStack className="items-center justify-between px-4 h-14">
        {/* Back Button */}
        <Pressable
          onPress={() => router.back()}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          className="w-10 items-start justify-center"
        >
          <Icon
            as={ChevronLeftIcon}
            size="xl"
            className={isDark ? 'text-white' : 'text-black'}
          />
        </Pressable>

        {/* Title */}
        <Text
          className={`text-lg font-sans font-semibold text-center flex-1 ${isDark ? 'text-white' : 'text-black'}`}
        >
          {title}
        </Text>

        {/* Right placeholder for alignment */}
        <Box className="w-10" />
      </HStack>
    </Box>
  );
}

export default function ShowcasesLayout() {
  const { isDark } = useAppTheme();
  const themeColorBackground = isDark ? '#000000' : '#ffffff';

  return (
    <Stack
      screenLayout={({ children }) => (
        <Box className="flex-1 bg-background">{children}</Box>
      )}
      screenOptions={{
        headerShown: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        fullScreenGestureEnabled: true,
        contentStyle: {
          backgroundColor: themeColorBackground,
        },
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          header: () => <CustomHeader title="Login Flow" />,
        }}
      />
      <Stack.Screen
        name="dashboard"
        options={{
          header: () => <CustomHeader title="Dashboard" />,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          header: () => <CustomHeader title="Profile" />,
        }}
      />
      <Stack.Screen
        name="ecommerce"
        options={{
          header: () => <CustomHeader title="E-Commerce" />,
        }}
      />
      <Stack.Screen
        name="social"
        options={{
          header: () => <CustomHeader title="Social Feed" />,
        }}
      />
    </Stack>
  );
}

