import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ArrowLeft, AtSign, Camera, Globe, Mail, MapPin, User, type LucideIcon } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { VStack } from '@/components/ui/vstack';

const BIO_LIMIT = 160;

type FieldProps = {
  label: string;
  icon: LucideIcon;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: 'default' | 'email-address' | 'url';
  autoCapitalize?: 'none' | 'words';
  hint?: string;
};

function Field({
  label,
  icon,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  autoCapitalize = 'words',
  hint,
}: FieldProps) {
  return (
    <VStack className="gap-2">
      <Text className="text-sm font-medium text-foreground">{label}</Text>
      <Input className="h-12 rounded-xl">
        <InputSlot className="pl-1">
          <InputIcon as={icon} className="text-muted-foreground" />
        </InputSlot>
        <InputField
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          className="text-base"
        />
      </Input>
      {hint ? <Text className="text-xs text-muted-foreground">{hint}</Text> : null}
    </VStack>
  );
}

export default function EditProfileScreen() {
  const [name, setName] = useState('Jordan Ellis');
  const [username, setUsername] = useState('jordanellis');
  const [email, setEmail] = useState('jordan.ellis@example.com');
  const [location, setLocation] = useState('Portland, Oregon');
  const [website, setWebsite] = useState('jordanellis.design');
  const [bio, setBio] = useState(
    'Product designer crafting calm interfaces. Weekend potter, amateur trail runner and coffee nerd.'
  );

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="gap-7 px-5 pb-36 pt-6">
        <HStack className="items-center justify-between">
          <Pressable
            aria-label="Back"
            className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
          >
            <Icon as={ArrowLeft} className="h-5 w-5 text-foreground" />
          </Pressable>
          <Text className="text-base font-semibold text-foreground">Edit profile</Text>
          <View className="h-10 w-10" />
        </HStack>

        <VStack className="items-center gap-3">
          <View>
            <Avatar size="lg" className="h-28 w-28">
              <AvatarFallbackText className="text-2xl">Jordan Ellis</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
                }}
              />
            </Avatar>
            <Pressable
              aria-label="Change photo"
              className="absolute bottom-0 right-0 h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-primary"
            >
              <Icon as={Camera} className="h-4 w-4 text-primary-foreground" />
            </Pressable>
          </View>
          <Pressable>
            <Text className="text-sm font-semibold text-foreground">Change photo</Text>
          </Pressable>
        </VStack>

        <VStack className="gap-5">
          <Field label="Full name" icon={User} value={name} onChangeText={setName} />
          <Field
            label="Username"
            icon={AtSign}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            hint={`yourapp.com/${username || 'username'}`}
          />
          <VStack className="gap-2">
            <HStack className="items-center justify-between">
              <Text className="text-sm font-medium text-foreground">Bio</Text>
              <Text
                className={`text-xs ${
                  bio.length > BIO_LIMIT - 20 ? 'text-amber-500' : 'text-muted-foreground'
                }`}
              >
                {bio.length}/{BIO_LIMIT}
              </Text>
            </HStack>
            <Textarea className="h-28 rounded-xl">
              <TextareaInput
                value={bio}
                onChangeText={(text) => setBio(text.slice(0, BIO_LIMIT))}
                placeholder="Tell people a little about yourself"
                multiline
                textAlignVertical="top"
                className="px-3 py-3 text-base"
              />
            </Textarea>
          </VStack>
          <Field
            label="Email"
            icon={Mail}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Field label="Location" icon={MapPin} value={location} onChangeText={setLocation} />
          <Field
            label="Website"
            icon={Globe}
            value={website}
            onChangeText={setWebsite}
            keyboardType="url"
            autoCapitalize="none"
          />

        </VStack>
      </ScrollView>

      <HStack className="absolute bottom-0 left-0 right-0 gap-3 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button variant="outline" size="lg" className="h-12 flex-1 rounded-xl">
          <ButtonText className="text-base">Cancel</ButtonText>
        </Button>
        <Button size="lg" className="h-12 flex-[2] rounded-xl">
          <ButtonText className="text-base">Save changes</ButtonText>
        </Button>
      </HStack>
    </KeyboardAvoidingView>
  );
}
