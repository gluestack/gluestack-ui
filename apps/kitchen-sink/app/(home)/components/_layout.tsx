import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { ChevronLeftIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useAppTheme } from '@/contexts/app-theme-context';
import { Stack, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
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

export default function ComponentsLayout() {
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
        name="accordion"
        options={{
          header: () => <CustomHeader title="Accordion" />,
        }}
      />
      <Stack.Screen
        name="alert"
        options={{
          header: () => <CustomHeader title="Alert" />,
        }}
      />
      <Stack.Screen
        name="alert-dialog"
        options={{
          header: () => <CustomHeader title="Alert Dialog" />,
        }}
      />
      <Stack.Screen
        name="avatar"
        options={{
          header: () => <CustomHeader title="Avatar" />,
        }}
      />
      <Stack.Screen
        name="form-control"
        options={{
          header: () => <CustomHeader title="Form Control" />,
        }}
      />
          <Stack.Screen
        name="actionsheet"
        options={{
          header: () => <CustomHeader title="Actionsheet" />,
        }}
      />
      <Stack.Screen
        name="badge"
        options={{
          header: () => <CustomHeader title="Badge" />,
        }}
      />
      <Stack.Screen
        name="box"
        options={{
          header: () => <CustomHeader title="Box" />,
        }}
      />
      <Stack.Screen
        name="button"
        options={{
          header: () => <CustomHeader title="Button" />,
        }}
      />
      <Stack.Screen
        name="card"
        options={{
          header: () => <CustomHeader title="Card" />,
        }}
      />
      <Stack.Screen
        name="center"
        options={{
          header: () => <CustomHeader title="Center" />,
        }}
      />
      <Stack.Screen
        name="checkbox"
        options={{
          header: () => <CustomHeader title="Checkbox" />,
        }}
      />
      <Stack.Screen
        name="divider"
        options={{
          header: () => <CustomHeader title="Divider" />,
        }}
      />
      <Stack.Screen
        name="drawer"
        options={{
          header: () => <CustomHeader title="Drawer" />,
        }}
      />
      <Stack.Screen
        name="fab"
        options={{
          header: () => <CustomHeader title="Fab" />,
        }}
      />
      <Stack.Screen
        name="grid"
        options={{
          header: () => <CustomHeader title="Grid" />,
        }}
      />
      <Stack.Screen
        name="heading"
        options={{
          header: () => <CustomHeader title="Heading" />,
        }}
      />
      <Stack.Screen
        name="hstack"
        options={{
          header: () => <CustomHeader title="HStack" />,
        }}
      />
      <Stack.Screen
        name="icon"
        options={{
          header: () => <CustomHeader title="Icon" />,
        }}
      />
      <Stack.Screen
        name="image"
        options={{
          header: () => <CustomHeader title="Image" />,
        }}
      />
      <Stack.Screen
        name="input"
        options={{
          header: () => <CustomHeader title="Input" />,
        }}
      />
      <Stack.Screen
        name="link"
        options={{
          header: () => <CustomHeader title="Link" />,
        }}
      />
      <Stack.Screen
        name="menu"
        options={{
          header: () => <CustomHeader title="Menu" />,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          header: () => <CustomHeader title="Modal" />,
        }}
      />
      <Stack.Screen
        name="popover"
        options={{
          header: () => <CustomHeader title="Popover" />,
        }}
      />
      <Stack.Screen
        name="portal"
        options={{
          header: () => <CustomHeader title="Portal" />,
        }}
      />
      <Stack.Screen
        name="pressable"
        options={{
          header: () => <CustomHeader title="Pressable" />,
        }}
      />
      <Stack.Screen
        name="progress"
        options={{
          header: () => <CustomHeader title="Progress" />,
        }}
      />
      <Stack.Screen
        name="radio"
        options={{
          header: () => <CustomHeader title="Radio" />,
        }}
      />
      <Stack.Screen
        name="select"
        options={{
          header: () => <CustomHeader title="Select" />,
        }}
      />
      <Stack.Screen
        name="skeleton"
        options={{
          header: () => <CustomHeader title="Skeleton" />,
        }}
      />
      <Stack.Screen
        name="slider"
        options={{
          header: () => <CustomHeader title="Slider" />,
        }}
      />
      <Stack.Screen
        name="spinner"
        options={{
          header: () => <CustomHeader title="Spinner" />,
        }}
      />
      <Stack.Screen
        name="switch"
        options={{
          header: () => <CustomHeader title="Switch" />,
        }}
      />
      <Stack.Screen
        name="table"
        options={{
          header: () => <CustomHeader title="Table" />,
        }}
      />
      <Stack.Screen
        name="text"
        options={{
          header: () => <CustomHeader title="Text" />,
        }}
      />
      <Stack.Screen
        name="textarea"
        options={{
          header: () => <CustomHeader title="Textarea" />,
        }}
      />
      <Stack.Screen
        name="toast"
        options={{
          header: () => <CustomHeader title="Toast" />,
        }}
      />
      <Stack.Screen
        name="tooltip"
        options={{
          header: () => <CustomHeader title="Tooltip" />,
        }}
      />
      <Stack.Screen
        name="vstack"
        options={{
          header: () => <CustomHeader title="VStack" />,
        }}
      />
          <Stack.Screen
        name="date-time-picker"
        options={{
          header: () => <CustomHeader title="DateTimePicker" />,
        }}
      />
          <Stack.Screen
        name="calendar"
        options={{
          header: () => <CustomHeader title="Calendar" />,
        }}
      />
          <Stack.Screen
        name="image-viewer"
        options={{
          header: () => <CustomHeader title="Image Viewer" />,
        }}
      />
    </Stack>
  );
}
