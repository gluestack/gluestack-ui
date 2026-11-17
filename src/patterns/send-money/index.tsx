import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ChevronLeft, Delete, MessageSquare, Plus, ScanLine } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const BALANCE = 12480.62;

const RECIPIENTS = [
  { id: 'daniel', name: 'Daniel', photo: 'photo-1507003211169-0a1dd7228f2d' },
  { id: 'sofia', name: 'Sofia', photo: 'photo-1438761681033-6461ffad8d80' },
  { id: 'liam', name: 'Liam', photo: 'photo-1500648767791-00dcc994a43e' },
  { id: 'aiko', name: 'Aiko', photo: 'photo-1534528741775-53994a69daeb' },
  { id: 'priya', name: 'Priya', photo: 'photo-1494790108377-be9c29b29330' },
];

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'];

function nextAmount(current: string, key: string) {
  if (key === 'del') return current.length > 1 ? current.slice(0, -1) : '0';
  if (key === '.') return current.includes('.') ? current : `${current}.`;
  const [, decimals] = current.split('.');
  if (decimals !== undefined && decimals.length >= 2) return current;
  if (current.replace('.', '').length >= 7) return current;
  return current === '0' ? key : current + key;
}

export default function SendMoneyScreen() {
  const [recipient, setRecipient] = useState('daniel');
  const [amount, setAmount] = useState('120');
  const [note, setNote] = useState('Concert tickets');

  const value = parseFloat(amount) || 0;
  const overBalance = value > BALANCE;
  const name = RECIPIENTS.find((r) => r.id === recipient)?.name ?? '';

  return (
    <View className="flex-1 bg-background pb-8 pt-6">
      <HStack className="items-center justify-between px-5">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border">
          <Icon as={ChevronLeft} className="h-5 w-5 text-foreground" />
        </Pressable>
        <Heading className="text-lg font-semibold text-foreground">Send money</Heading>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border">
          <Icon as={ScanLine} className="h-5 w-5 text-foreground" />
        </Pressable>
      </HStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-6 flex-grow-0"
        contentContainerClassName="gap-4 px-5"
      >
        <Pressable className="items-center gap-1.5">
          <View className="h-14 w-14 items-center justify-center rounded-full border border-dashed border-border">
            <Icon as={Plus} className="h-5 w-5 text-foreground" />
          </View>
          <Text className="text-xs text-muted-foreground">New</Text>
        </Pressable>
        {RECIPIENTS.map((r) => {
          const active = r.id === recipient;
          return (
            <Pressable key={r.id} onPress={() => setRecipient(r.id)} className="items-center gap-1.5">
              <View
                className={`rounded-full border-2 p-0.5 ${
                  active ? 'border-violet-500' : 'border-transparent'
                }`}
              >
                <Avatar size="md">
                  <AvatarFallbackText>{r.name}</AvatarFallbackText>
                  <AvatarImage
                    source={{ uri: `https://images.unsplash.com/${r.photo}?w=120&q=80` }}
                  />
                </Avatar>
              </View>
              <Text
                className={`text-xs ${
                  active ? 'font-semibold text-foreground' : 'text-muted-foreground'
                }`}
              >
                {r.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <VStack className="flex-1 items-center justify-center gap-2 px-5">
        <Text className="text-sm text-muted-foreground">Sending to {name}</Text>
        <HStack className="items-start">
          <Text className="mt-2 text-3xl font-semibold text-muted-foreground">$</Text>
          <Text
            className={`text-6xl font-bold ${overBalance ? 'text-destructive' : 'text-foreground'}`}
          >
            {amount}
          </Text>
        </HStack>
        <View className={`rounded-full px-3 py-1 ${overBalance ? 'bg-destructive/10' : 'bg-muted'}`}>
          <Text className={`text-xs font-medium ${overBalance ? 'text-destructive' : 'text-muted-foreground'}`}>
            {overBalance
              ? 'Exceeds your available balance'
              : `Balance $${BALANCE.toLocaleString('en-US', { minimumFractionDigits: 2 })}`}
          </Text>
        </View>
      </VStack>

      <View className="px-5">
        <Input className="h-12 rounded-2xl bg-muted">
          <InputSlot className="pl-1">
            <InputIcon as={MessageSquare} className="text-muted-foreground" />
          </InputSlot>
          <InputField placeholder="Add a note" value={note} onChangeText={setNote} />
        </Input>
      </View>

      <View className="mt-3 flex-row flex-wrap px-5">
        {KEYS.map((key) => (
          <Pressable
            key={key}
            onPress={() => setAmount((a) => nextAmount(a, key))}
            className="h-14 w-1/3 items-center justify-center rounded-2xl data-[active=true]:bg-muted"
          >
            {key === 'del' ? (
              <Icon as={Delete} className="h-6 w-6 text-foreground" />
            ) : (
              <Text className="text-2xl font-medium text-foreground">{key}</Text>
            )}
          </Pressable>
        ))}
      </View>

      <View className="mt-3 px-5">
        <Button size="lg" className="h-14 rounded-2xl" disabled={value <= 0 || overBalance}>
          <ButtonText className="text-base">
            Send ${value.toFixed(2)} to {name}
          </ButtonText>
        </Button>
      </View>
    </View>
  );
}
