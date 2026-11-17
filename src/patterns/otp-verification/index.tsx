import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View } from 'react-native';
import { ArrowLeft, MessageSquareText, ShieldCheck } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const CODE_LENGTH = 6;
const RESEND_AFTER = 45;
const PHONE = '+1\u00a0(415)\u00a0555\u20110132';

function CodeBox({ digit, active }: { digit?: string; active: boolean }) {
  return (
    <View
      className={`h-14 flex-1 items-center justify-center rounded-2xl border-2 ${
        active
          ? 'border-foreground bg-card'
          : digit
            ? 'border-border bg-card'
            : 'border-border bg-muted'
      }`}
    >
      {digit ? (
        <Text className="text-2xl font-semibold text-foreground">{digit}</Text>
      ) : active ? (
        <View className="h-6 w-0.5 rounded-full bg-foreground" />
      ) : null}
    </View>
  );
}

export default function OtpVerificationScreen() {
  const [code, setCode] = useState('4827');
  const [secondsLeft, setSecondsLeft] = useState(RESEND_AFTER);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft]);

  const digits = code.split('');
  const complete = code.length === CODE_LENGTH;
  const timer = `0:${String(secondsLeft).padStart(2, '0')}`;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="flex-grow px-6 pb-10 pt-6">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
          <Icon as={ArrowLeft} className="h-5 w-5 text-foreground" />
        </Pressable>

        <VStack className="mt-8 gap-3">
          <View className="h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/15">
            <Icon as={MessageSquareText} className="h-7 w-7 text-emerald-500" />
          </View>
          <Heading className="text-3xl font-bold text-foreground">Enter the code</Heading>
          <Text className="text-base leading-6 text-muted-foreground">
            We texted a 6-digit code to{' '}
            <Text className="text-base font-semibold text-foreground">{PHONE}</Text>. It expires in
            10 minutes.
          </Text>
        </VStack>

        <Pressable className="relative mt-8" onPress={() => inputRef.current?.focus()}>
          <HStack className="gap-2">
            {Array.from({ length: CODE_LENGTH }, (_, i) => (
              <CodeBox key={i} digit={digits[i]} active={i === code.length} />
            ))}
          </HStack>
          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={(t) => setCode(t.replace(/\D/g, '').slice(0, CODE_LENGTH))}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            autoComplete="one-time-code"
            maxLength={CODE_LENGTH}
            caretHidden
            className="absolute inset-0 opacity-0"
          />
        </Pressable>

        <HStack className="mt-5 items-center justify-center gap-1">
          <Text className="text-sm text-muted-foreground">Didn't get it?</Text>
          {secondsLeft > 0 ? (
            <Text className="text-sm text-muted-foreground">
              Resend in <Text className="text-sm font-semibold text-foreground">{timer}</Text>
            </Text>
          ) : (
            <Pressable
              onPress={() => {
                setCode('');
                setSecondsLeft(RESEND_AFTER);
              }}
            >
              <Text className="text-sm font-semibold text-foreground underline">Resend code</Text>
            </Pressable>
          )}
        </HStack>

        <Button size="lg" className="mt-8 h-12 rounded-xl" isDisabled={!complete}>
          <ButtonText className="text-base">Verify</ButtonText>
        </Button>

        <View className="mt-auto pt-10">
          <HStack className="items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <Icon as={ShieldCheck} className="h-5 w-5 text-muted-foreground" />
            <Text className="flex-1 text-xs leading-5 text-muted-foreground">
              We'll never ask for this code by phone or email. Wrong number?{' '}
              <Text className="text-xs font-semibold text-foreground">Change it</Text>
            </Text>
          </HStack>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
