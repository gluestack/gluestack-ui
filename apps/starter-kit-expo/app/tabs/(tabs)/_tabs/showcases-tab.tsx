import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { memo, useCallback } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useAppTheme } from '@/contexts/app-theme-context';
import { Text } from '@/components/ui/text';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { SHOWCASES_LIST, type ShowcaseItem } from '@/constants/showcases-list';
import {
  LayoutDashboard,
  LogIn,
  ShoppingCart,
  User,
  Users,
} from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

// Showcase gradient colors
const SHOWCASE_GRADIENTS: Record<string, readonly [string, string]> = {
  login: ['#667eea', '#764ba2'],
  dashboard: ['#11998e', '#38ef7d'],
  profile: ['#ee0979', '#ff6a00'],
  ecommerce: ['#4facfe', '#00f2fe'],
  social: ['#fa709a', '#fee140'],
};

const SHOWCASE_ICONS: Record<string, React.ElementType> = {
  login: LogIn,
  dashboard: LayoutDashboard,
  profile: User,
  ecommerce: ShoppingCart,
  social: Users,
};

type ShowcaseCardProps = {
  item: ShowcaseItem;
  index: number;
  onPress: () => void;
};

const ShowcaseCard = memo(({ item, index, onPress }: ShowcaseCardProps) => {
  const gradientColors =
    SHOWCASE_GRADIENTS[item.path] || (['#3497D266', '#3497D2'] as const);
  const IconComponent = SHOWCASE_ICONS[item.path];

  return (
    <Pressable onPress={onPress} className="mb-4">
      <Card className="overflow-hidden rounded-2xl border-0 h-40">
        <AnimatedLinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <View className="flex-1 flex-row items-center justify-between p-6">
          <VStack className="flex-1 gap-2">
            <Text className="text-white font-sans text-2xl font-bold">
              {item.title}
            </Text>
            <Text className="text-white/80 text-sm">
              {item.description || 'Explore this showcase'}
            </Text>
          </VStack>
          {IconComponent && (
            <View className="bg-white/20 rounded-full p-4">
              <Icon as={IconComponent} className="text-white h-8 w-8" />
            </View>
          )}
        </View>
      </Card>
    </Pressable>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default function ShowcasesTab() {
  const router = useRouter();
  const { isDark } = useAppTheme();

  const handleCardPress = useCallback(
    (path: string) => {
      if (Platform.OS === 'ios') {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }
      // Navigate to showcase - you can customize this route
      router.push(`/tabs/showcases/${path}` as any);
    },
    [router]
  );

  const Header = () => {
    return (
      <View className="items-center justify-center z-10 mt-4 gap-2 mb-6">
        <HStack className="items-center gap-2">
          <Image
            source={{
              uri: isDark
                ? 'https://i.imgur.com/EUqtUMu.png'
                : 'https://i.imgur.com/9bvua6C.png',
            }}
            alt="Kitchensink App Logo"
            className="h-6 w-6"
          />
          <Text className="text-2xl font-bold font-sans">Showcases</Text>
        </HStack>
        <Text className="max-w-[80%] text-foreground/80 text-center font-serif">
          See components in real-world application scenarios
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <Header />
      <ScrollView
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {SHOWCASES_LIST.map((item, index) => (
          <ShowcaseCard
            key={item.path}
            item={item}
            index={index}
            onPress={() => handleCardPress(item.path)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
