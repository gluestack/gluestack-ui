import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Phone, Search, Star, UserPlus } from 'lucide-react-native';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Contact = {
  name: string;
  detail: string;
  photo?: string;
  online?: boolean;
  tint?: string;
};

const photo = (id: string) => `https://images.unsplash.com/${id}?w=200&q=80`;

const FAVOURITES: Contact[] = [
  { name: 'Amara Okafor', detail: 'Mobile', photo: photo('photo-1494790108377-be9c29b29330'), online: true },
  { name: 'Leo Martins', detail: 'Mobile', photo: photo('photo-1500648767791-00dcc994a43e') },
  { name: 'Hana Sato', detail: 'Work', photo: photo('photo-1438761681033-6461ffad8d80'), online: true },
  { name: 'Ravi Kapoor', detail: 'Mobile', photo: photo('photo-1507003211169-0a1dd7228f2d') },
  { name: 'Elena Novak', detail: 'Home', photo: photo('photo-1534528741775-53994a69daeb') },
];

const CONTACTS: Contact[] = [
  { name: 'Amara Okafor', detail: '+1 415 555 0132', photo: FAVOURITES[0].photo, online: true },
  { name: 'Andre Silva', detail: 'Product designer', tint: 'bg-sky-500/15' },
  { name: 'Bea Thompson', detail: '+1 628 555 0190', tint: 'bg-rose-500/15' },
  { name: 'Ben Whitaker', detail: 'Landlord', tint: 'bg-amber-500/15' },
  { name: 'Carmen Ortiz', detail: '+1 510 555 0147', tint: 'bg-emerald-500/15' },
  { name: 'Daniel Kim', detail: 'Engineering lead', photo: photo('photo-1500648767791-00dcc994a43e') },
  { name: 'Elena Novak', detail: '+44 20 7946 0958', photo: FAVOURITES[4].photo },
  { name: 'Felix Brandt', detail: 'Climbing partner', tint: 'bg-violet-500/15' },
  { name: 'Hana Sato', detail: '+81 3 5550 1234', photo: FAVOURITES[2].photo, online: true },
  { name: 'Isla Morgan', detail: 'Dentist', tint: 'bg-teal-500/15' },
];

function groupByLetter(list: Contact[]) {
  return list.reduce<Record<string, Contact[]>>((acc, c) => {
    const letter = c.name[0].toUpperCase();
    (acc[letter] ??= []).push(c);
    return acc;
  }, {});
}

function ContactRow({ contact }: { contact: Contact }) {
  return (
    <Pressable className="flex-row items-center gap-3 py-2.5 data-[active=true]:opacity-70">
      <Avatar size="md" className={contact.tint}>
        <AvatarFallbackText className="text-sm font-semibold">{contact.name}</AvatarFallbackText>
        {contact.photo ? <AvatarImage source={{ uri: contact.photo }} /> : null}
        {contact.online ? <AvatarBadge /> : null}
      </Avatar>
      <VStack className="flex-1">
        <Text className="text-base font-medium text-foreground">{contact.name}</Text>
        <Text className="text-sm text-muted-foreground">{contact.detail}</Text>
      </VStack>
      <View className="h-9 w-9 items-center justify-center rounded-full bg-muted">
        <Icon as={Phone} className="h-4 w-4 text-foreground" />
      </View>
    </Pressable>
  );
}

export default function ContactsListScreen() {
  const [query, setQuery] = useState('');
  const filtered = CONTACTS.filter((c) => c.name.toLowerCase().includes(query.trim().toLowerCase()));
  const sections = groupByLetter(filtered);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-6 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <VStack>
          <Heading className="text-3xl font-bold text-foreground">Contacts</Heading>
          <Text className="text-sm text-muted-foreground">248 people</Text>
        </VStack>
        <Pressable
          aria-label="Add contact"
          className="h-11 w-11 items-center justify-center rounded-full bg-primary"
        >
          <Icon as={UserPlus} className="h-5 w-5 text-primary-foreground" />
        </Pressable>
      </HStack>

      <Input className="h-12 rounded-xl bg-muted">
        <InputSlot className="pl-1">
          <InputIcon as={Search} className="h-5 w-5 text-muted-foreground" />
        </InputSlot>
        <InputField
          placeholder="Search name or number"
          value={query}
          onChangeText={setQuery}
          className="text-base"
        />
      </Input>

      {query ? null : (
        <VStack className="gap-3">
          <HStack className="items-center gap-1.5">
            <Icon as={Star} className="h-4 w-4 fill-amber-400 text-amber-400" />
            <Text className="text-sm font-semibold text-foreground">Favourites</Text>
          </HStack>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4">
            {FAVOURITES.map((c) => (
              <Pressable key={c.name} className="w-16 items-center gap-2">
                <View className="rounded-full border-2 border-primary p-0.5">
                  <Avatar size="lg" className="h-14 w-14">
                    <AvatarFallbackText>{c.name}</AvatarFallbackText>
                    {c.photo ? <AvatarImage source={{ uri: c.photo }} /> : null}
                    {c.online ? <AvatarBadge /> : null}
                  </Avatar>
                </View>
                <Text className="text-xs font-medium text-foreground" numberOfLines={1}>
                  {c.name.split(' ')[0]}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </VStack>
      )}

      <VStack className="gap-4">
        {Object.entries(sections).map(([letter, list]) => (
          <VStack key={letter}>
            <Text className="pb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
              {letter}
            </Text>
            {list.map((c, i) => (
              <View key={c.name}>
                {i > 0 ? <View className="ml-[60px] h-px bg-border" /> : null}
                <ContactRow contact={c} />
              </View>
            ))}
          </VStack>
        ))}
        {filtered.length === 0 ? (
          <Text className="py-8 text-center text-sm text-muted-foreground">
            No contacts match “{query}”
          </Text>
        ) : null}
      </VStack>
    </ScrollView>
  );
}
