import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="flex-grow justify-center px-6 py-12">
        <VStack className="gap-8">
          <VStack className="gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <Icon as={Lock} className="h-6 w-6 text-primary-foreground" />
            </View>
            <Heading className="text-3xl font-bold text-foreground">Welcome back</Heading>
            <Text className="text-base text-muted-foreground">
              Sign in to pick up where you left off.
            </Text>
          </VStack>

          <VStack className="gap-4">
            <VStack className="gap-2">
              <Text className="text-sm font-medium text-foreground">Email</Text>
              <Input className="h-12 rounded-xl">
                <InputSlot className="pl-3">
                  <InputIcon as={Mail} className="text-muted-foreground" />
                </InputSlot>
                <InputField
                  placeholder="you@example.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  value={email}
                  onChangeText={setEmail}
                />
              </Input>
            </VStack>

            <VStack className="gap-2">
              <HStack className="items-center justify-between">
                <Text className="text-sm font-medium text-foreground">Password</Text>
                <Link href="#">
                  <LinkText className="text-sm text-muted-foreground no-underline">
                    Forgot password?
                  </LinkText>
                </Link>
              </HStack>
              <Input className="h-12 rounded-xl">
                <InputSlot className="pl-3">
                  <InputIcon as={Lock} className="text-muted-foreground" />
                </InputSlot>
                <InputField
                  placeholder="Your password"
                  secureTextEntry={!showPassword}
                  autoComplete="password"
                  value={password}
                  onChangeText={setPassword}
                />
                <InputSlot className="pr-3" onPress={() => setShowPassword((v) => !v)}>
                  <InputIcon as={showPassword ? EyeOff : Eye} className="text-muted-foreground" />
                </InputSlot>
              </Input>
            </VStack>

            <Button size="lg" className="mt-2 h-12 rounded-xl">
              <ButtonText className="text-base">Sign in</ButtonText>
            </Button>
          </VStack>

          <HStack className="items-center gap-3">
            <Divider className="flex-1" />
            <Text className="text-xs uppercase tracking-wider text-muted-foreground">or</Text>
            <Divider className="flex-1" />
          </HStack>

          <VStack className="gap-3">
            <Button variant="outline" size="lg" className="h-12 rounded-xl">
              <ButtonText className="text-base">Continue with Apple</ButtonText>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-xl">
              <ButtonText className="text-base">Continue with Google</ButtonText>
            </Button>
          </VStack>

          <HStack className="justify-center gap-1">
            <Text className="text-sm text-muted-foreground">New here?</Text>
            <Pressable>
              <Text className="text-sm font-semibold text-foreground">Create an account</Text>
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
