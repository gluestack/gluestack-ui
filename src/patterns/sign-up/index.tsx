import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Check, Circle, Eye, EyeOff, Lock, Mail, User, UserPlus } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const RULES = [
  { label: '8+ characters', test: (p: string) => p.length >= 8 },
  { label: 'A number', test: (p: string) => /\d/.test(p) },
  { label: 'Upper & lowercase', test: (p: string) => /[a-z]/.test(p) && /[A-Z]/.test(p) },
  { label: 'A symbol', test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

const LEVELS = [
  { label: 'Too weak', bar: 'bg-red-500', text: 'text-red-500' },
  { label: 'Weak', bar: 'bg-red-500', text: 'text-red-500' },
  { label: 'Fair', bar: 'bg-amber-500', text: 'text-amber-500' },
  { label: 'Good', bar: 'bg-lime-500', text: 'text-lime-600' },
  { label: 'Strong', bar: 'bg-emerald-500', text: 'text-emerald-500' },
];

function StrengthMeter({ password }: { password: string }) {
  const score = RULES.filter((r) => r.test(password)).length;
  const level = LEVELS[score];

  return (
    <VStack className="gap-3">
      <HStack className="items-center gap-1.5">
        {RULES.map((rule, i) => (
          <View
            key={rule.label}
            className={`h-1.5 flex-1 rounded-full ${i < score ? level.bar : 'bg-muted'}`}
          />
        ))}
        <Text className={`ml-2 w-16 text-right text-xs font-semibold ${level.text}`}>
          {password ? level.label : ''}
        </Text>
      </HStack>
      <View className="flex-row flex-wrap gap-x-4 gap-y-1.5">
        {RULES.map((rule) => {
          const ok = rule.test(password);
          return (
            <HStack key={rule.label} className="w-[45%] items-center gap-1.5">
              <Icon
                as={ok ? Check : Circle}
                className={`h-3.5 w-3.5 ${ok ? 'text-emerald-500' : 'text-muted-foreground'}`}
              />
              <Text className={`text-xs ${ok ? 'text-foreground' : 'text-muted-foreground'}`}>
                {rule.label}
              </Text>
            </HStack>
          );
        })}
      </View>
    </VStack>
  );
}

export default function SignUpScreen() {
  const [name, setName] = useState('Maya Patel');
  const [email, setEmail] = useState('maya.patel@example.com');
  const [password, setPassword] = useState('Sunset2026');
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="flex-grow px-6 pb-12 pt-8">
        <VStack className="gap-7">
          <VStack className="gap-3">
            <View className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
              <Icon as={UserPlus} className="h-6 w-6 text-primary-foreground" />
            </View>
            <Heading className="text-3xl font-bold text-foreground">Create your account</Heading>
            <Text className="text-base text-muted-foreground">
              It takes less than a minute. No credit card needed.
            </Text>
          </VStack>

          <VStack className="gap-4">
            <VStack className="gap-2">
              <Text className="text-sm font-medium text-foreground">Full name</Text>
              <Input className="h-12 rounded-xl">
                <InputSlot className="pl-3">
                  <InputIcon as={User} className="text-muted-foreground" />
                </InputSlot>
                <InputField
                  placeholder="Jane Doe"
                  autoComplete="name"
                  value={name}
                  onChangeText={setName}
                />
              </Input>
            </VStack>

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
              <Text className="text-sm font-medium text-foreground">Password</Text>
              <Input className="h-12 rounded-xl">
                <InputSlot className="pl-3">
                  <InputIcon as={Lock} className="text-muted-foreground" />
                </InputSlot>
                <InputField
                  placeholder="Create a password"
                  secureTextEntry={!showPassword}
                  autoComplete="new-password"
                  value={password}
                  onChangeText={setPassword}
                />
                <InputSlot className="pr-3" onPress={() => setShowPassword((v) => !v)}>
                  <InputIcon as={showPassword ? EyeOff : Eye} className="text-muted-foreground" />
                </InputSlot>
              </Input>
              <View className="pt-1">
                <StrengthMeter password={password} />
              </View>
            </VStack>

            <Checkbox
              value="terms"
              isChecked={agreed}
              onChange={setAgreed}
              className="mt-1 items-start gap-3"
            >
              <CheckboxIndicator className="mt-0.5 h-5 w-5 rounded-md">
                <CheckboxIcon as={Check} />
              </CheckboxIndicator>
              <CheckboxLabel className="flex-1 text-sm font-normal leading-5 text-muted-foreground">
                I agree to the{' '}
                <Text className="text-sm font-semibold text-foreground">Terms of Service</Text> and{' '}
                <Text className="text-sm font-semibold text-foreground">Privacy Policy</Text>
              </CheckboxLabel>
            </Checkbox>

            <Button size="lg" className="mt-1 h-12 rounded-xl" isDisabled={!agreed}>
              <ButtonText className="text-base">Create account</ButtonText>
            </Button>
          </VStack>

          <HStack className="items-center gap-3">
            <Divider className="flex-1" />
            <Text className="text-xs uppercase tracking-wider text-muted-foreground">or</Text>
            <Divider className="flex-1" />
          </HStack>

          <HStack className="gap-3">
            <Button variant="outline" size="lg" className="h-12 flex-1 rounded-xl">
              <ButtonText className="text-base">Apple</ButtonText>
            </Button>
            <Button variant="outline" size="lg" className="h-12 flex-1 rounded-xl">
              <ButtonText className="text-base">Google</ButtonText>
            </Button>
          </HStack>

          <HStack className="justify-center gap-1">
            <Text className="text-sm text-muted-foreground">Already have an account?</Text>
            <Pressable>
              <Text className="text-sm font-semibold text-foreground">Sign in</Text>
            </Pressable>
          </HStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
