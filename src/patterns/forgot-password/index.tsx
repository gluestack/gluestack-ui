import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ArrowLeft, KeyRound, Mail, MailCheck, ShieldCheck, Sparkles } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

function KeyIllustration() {
  return (
    <View className="h-56 items-center justify-center">
      <View className="absolute h-56 w-56 rounded-full bg-sky-500/5" />
      <View className="absolute h-40 w-40 rounded-full bg-sky-500/10" />
      <View className="h-24 w-24 rotate-6 items-center justify-center rounded-[28px] bg-sky-500 shadow-lg">
        <Icon as={KeyRound} className="h-11 w-11 text-white" />
      </View>
      <View className="absolute left-8 top-10 h-12 w-12 -rotate-12 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
        <Icon as={Mail} className="h-5 w-5 text-sky-500" />
      </View>
      <View className="absolute bottom-8 right-10 h-11 w-11 rotate-12 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
        <Icon as={ShieldCheck} className="h-5 w-5 text-emerald-500" />
      </View>
      <View className="absolute right-14 top-6">
        <Icon as={Sparkles} className="h-5 w-5 text-amber-400" />
      </View>
      <View className="absolute bottom-12 left-14 h-2.5 w-2.5 rounded-full bg-sky-400" />
    </View>
  );
}

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('maya.patel@example.com');
  const [sent, setSent] = useState(false);
  const valid = /^\S+@\S+\.\S+$/.test(email);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="flex-grow px-6 pb-10 pt-6">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
          <Icon as={ArrowLeft} className="h-5 w-5 text-foreground" />
        </Pressable>

        <View className="mt-2">
          <KeyIllustration />
        </View>

        <VStack className="mt-2 items-center gap-2">
          <Heading className="text-center text-3xl font-bold text-foreground">
            Forgot password?
          </Heading>
          <Text className="max-w-[300px] text-center text-base leading-6 text-muted-foreground">
            No worries. Enter the email you signed up with and we'll send you a reset link.
          </Text>
        </VStack>

        <VStack className="mt-8 gap-4">
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
                onChangeText={(t) => {
                  setEmail(t);
                  setSent(false);
                }}
              />
            </Input>
          </VStack>

          <Button
            size="lg"
            className="h-12 rounded-xl"
            isDisabled={!valid}
            onPress={() => setSent(true)}
          >
            <ButtonText className="text-base">
              {sent ? 'Resend link' : 'Send reset link'}
            </ButtonText>
          </Button>

          {sent ? (
            <HStack className="items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-emerald-500">
                <Icon as={MailCheck} className="h-[18px] w-[18px] text-white" />
              </View>
              <VStack className="flex-1 gap-0.5">
                <Text className="text-sm font-semibold text-foreground">Check your inbox</Text>
                <Text className="text-sm leading-5 text-muted-foreground">
                  We sent a link to {email}. It expires in 30 minutes, so check spam if it's not
                  there.
                </Text>
              </VStack>
            </HStack>
          ) : (
            <Text className="text-center text-xs text-muted-foreground">
              The link expires in 30 minutes.
            </Text>
          )}
        </VStack>

        <HStack className="mt-auto justify-center gap-1 pt-10">
          <Text className="text-sm text-muted-foreground">Remembered it?</Text>
          <Pressable>
            <Text className="text-sm font-semibold text-foreground">Back to sign in</Text>
          </Pressable>
        </HStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
