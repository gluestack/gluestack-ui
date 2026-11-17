import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Bell,
  ChevronRight,
  CreditCard,
  Globe,
  HelpCircle,
  LogOut,
  Moon,
  Shield,
  User,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type RowProps = {
  icon: LucideIcon;
  label: string;
  value?: string;
  onPress?: () => void;
  right?: React.ReactNode;
  destructive?: boolean;
};

function SettingsRow({ icon, label, value, onPress, right, destructive }: RowProps) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center gap-3 px-4 py-3.5 data-[active=true]:bg-muted"
    >
      <View
        className={`h-9 w-9 items-center justify-center rounded-xl ${
          destructive ? 'bg-destructive/10' : 'bg-muted'
        }`}
      >
        <Icon
          as={icon}
          className={`h-[18px] w-[18px] ${destructive ? 'text-destructive' : 'text-foreground'}`}
        />
      </View>
      <Text
        className={`flex-1 text-base ${destructive ? 'text-destructive' : 'text-foreground'}`}
      >
        {label}
      </Text>
      {right ?? (
        <HStack className="items-center gap-1">
          {value ? <Text className="text-sm text-muted-foreground">{value}</Text> : null}
          {!destructive ? (
            <Icon as={ChevronRight} className="h-4 w-4 text-muted-foreground" />
          ) : null}
        </HStack>
      )}
    </Pressable>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <VStack className="gap-2">
      <Text className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </Text>
      <View className="overflow-hidden rounded-2xl border border-border bg-card">{children}</View>
    </VStack>
  );
}

const Separator = () => <View className="ml-16 h-px bg-border" />;

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-6 px-5 pb-12 pt-6">
      <Heading className="text-3xl font-bold text-foreground">Settings</Heading>

      <Pressable className="flex-row items-center gap-4 rounded-2xl border border-border bg-card p-4">
        <Avatar size="lg">
          <AvatarFallbackText>Ada Lovelace</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
            }}
          />
        </Avatar>
        <VStack className="flex-1">
          <Text className="text-lg font-semibold text-foreground">Ada Lovelace</Text>
          <Text className="text-sm text-muted-foreground">ada@example.com</Text>
        </VStack>
        <Icon as={ChevronRight} className="h-5 w-5 text-muted-foreground" />
      </Pressable>

      <Section title="Account">
        <SettingsRow icon={User} label="Personal details" />
        <Separator />
        <SettingsRow icon={Shield} label="Privacy and security" />
        <Separator />
        <SettingsRow icon={CreditCard} label="Subscription" value="Pro" />
      </Section>

      <Section title="Preferences">
        <SettingsRow
          icon={Bell}
          label="Notifications"
          right={<Switch value={notifications} onValueChange={setNotifications} />}
        />
        <Separator />
        <SettingsRow
          icon={Moon}
          label="Dark mode"
          right={<Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <Separator />
        <SettingsRow icon={Globe} label="Language" value="English" />
      </Section>

      <Section title="Support">
        <SettingsRow icon={HelpCircle} label="Help center" />
        <Separator />
        <SettingsRow icon={LogOut} label="Sign out" destructive />
      </Section>

      <Text className="text-center text-xs text-muted-foreground">Version 2.4.0</Text>
    </ScrollView>
  );
}
