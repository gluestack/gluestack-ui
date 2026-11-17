import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  FileArchive,
  FileText,
  Folder,
  Image as ImageIcon,
  Grid2x2,
  List,
  MoreVertical,
  Music,
  Plus,
  Search,
  Video,
  type LucideIcon,
} from 'lucide-react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Tint = { text: string; bg: string; bar: string };
const BLUE: Tint = { text: 'text-sky-500', bg: 'bg-sky-500/15', bar: 'bg-sky-500' };
const VIOLET: Tint = { text: 'text-violet-500', bg: 'bg-violet-500/15', bar: 'bg-violet-500' };
const AMBER: Tint = { text: 'text-amber-500', bg: 'bg-amber-500/15', bar: 'bg-amber-500' };
const EMERALD: Tint = { text: 'text-emerald-500', bg: 'bg-emerald-500/15', bar: 'bg-emerald-500' };
const ROSE: Tint = { text: 'text-rose-500', bg: 'bg-rose-500/15', bar: 'bg-rose-500' };

const STORAGE = [
  { label: 'Photos', gb: 18.4, tint: BLUE },
  { label: 'Videos', gb: 12.1, tint: VIOLET },
  { label: 'Documents', gb: 6.8, tint: AMBER },
  { label: 'Other', gb: 4.2, tint: EMERALD },
];
const TOTAL_GB = 64;
const USED_GB = STORAGE.reduce((sum, s) => sum + s.gb, 0);

const FOLDERS: { name: string; items: number; size: string; tint: Tint }[] = [
  { name: 'Design assets', items: 128, size: '4.2 GB', tint: BLUE },
  { name: 'Contracts', items: 34, size: '210 MB', tint: AMBER },
  { name: 'Trip to Lisbon', items: 412, size: '9.6 GB', tint: VIOLET },
  { name: 'Podcast edits', items: 22, size: '1.8 GB', tint: EMERALD },
];

const FILES: { name: string; meta: string; icon: LucideIcon; tint: Tint }[] = [
  { name: 'Q4 board deck.pdf', meta: '4.6 MB · Edited 2h ago', icon: FileText, tint: ROSE },
  { name: 'Homepage hero v3.png', meta: '2.1 MB · Edited yesterday', icon: ImageIcon, tint: BLUE },
  { name: 'Launch teaser.mp4', meta: '86 MB · Nov 14', icon: Video, tint: VIOLET },
  { name: 'Episode 12 master.wav', meta: '142 MB · Nov 12', icon: Music, tint: EMERALD },
  { name: 'Brand kit 2026.zip', meta: '38 MB · Nov 9', icon: FileArchive, tint: AMBER },
];

function FolderTile({ folder, grid }: { folder: (typeof FOLDERS)[number]; grid: boolean }) {
  if (grid) {
    return (
      <Pressable className="w-[48%] gap-4 rounded-2xl border border-border bg-card p-4 data-[active=true]:bg-muted">
        <HStack className="items-start justify-between">
          <View className={`h-11 w-11 items-center justify-center rounded-xl ${folder.tint.bg}`}>
            <Icon as={Folder} className={`h-5 w-5 ${folder.tint.text} fill-current`} />
          </View>
          <Icon as={MoreVertical} className="h-4 w-4 text-muted-foreground" />
        </HStack>
        <VStack className="gap-0.5">
          <Text className="text-base font-semibold text-foreground" numberOfLines={1}>
            {folder.name}
          </Text>
          <Text className="text-xs text-muted-foreground">
            {folder.items} files · {folder.size}
          </Text>
        </VStack>
      </Pressable>
    );
  }
  return (
    <Pressable className="w-full flex-row items-center gap-3 rounded-2xl border border-border bg-card p-3 data-[active=true]:bg-muted">
      <View className={`h-11 w-11 items-center justify-center rounded-xl ${folder.tint.bg}`}>
        <Icon as={Folder} className={`h-5 w-5 ${folder.tint.text} fill-current`} />
      </View>
      <VStack className="flex-1">
        <Text className="text-base font-semibold text-foreground">{folder.name}</Text>
        <Text className="text-xs text-muted-foreground">
          {folder.items} files · {folder.size}
        </Text>
      </VStack>
      <Icon as={MoreVertical} className="h-4 w-4 text-muted-foreground" />
    </Pressable>
  );
}

export default function FileBrowserScreen() {
  const [grid, setGrid] = useState(true);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-32 pt-6">
        <HStack className="items-center justify-between">
          <Heading className="text-3xl font-bold text-foreground">My files</Heading>
          <Pressable
            aria-label="Search files"
            className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
          >
            <Icon as={Search} className="h-5 w-5 text-foreground" />
          </Pressable>
        </HStack>

        <VStack className="gap-4 rounded-3xl border border-border bg-card p-5">
          <HStack className="items-end justify-between">
            <VStack className="gap-1">
              <Text className="text-sm text-muted-foreground">Storage</Text>
              <Text className="text-2xl font-bold text-foreground">
                {USED_GB.toFixed(1)} GB
                <Text className="text-base font-medium text-muted-foreground"> of {TOTAL_GB} GB</Text>
              </Text>
            </VStack>
            <Text className="text-sm font-semibold text-foreground">
              {Math.round((USED_GB / TOTAL_GB) * 100)}% used
            </Text>
          </HStack>
          <HStack className="h-2.5 gap-0.5 overflow-hidden rounded-full bg-muted">
            {STORAGE.map((s) => (
              <View
                key={s.label}
                className={`h-full ${s.tint.bar}`}
                style={{ width: `${(s.gb / TOTAL_GB) * 100}%` }}
              />
            ))}
          </HStack>
          <HStack className="flex-wrap gap-x-4 gap-y-2">
            {STORAGE.map((s) => (
              <HStack key={s.label} className="items-center gap-1.5">
                <View className={`h-2 w-2 rounded-full ${s.tint.bar}`} />
                <Text className="text-xs text-muted-foreground">
                  {s.label} <Text className="text-xs font-medium text-foreground">{s.gb} GB</Text>
                </Text>
              </HStack>
            ))}
          </HStack>
        </VStack>

        <VStack className="gap-3">
          <HStack className="items-center justify-between">
            <Text className="text-lg font-semibold text-foreground">Folders</Text>
            <HStack className="rounded-full bg-muted p-1">
              {[
                { value: true, icon: Grid2x2, label: 'Grid view' },
                { value: false, icon: List, label: 'List view' },
              ].map((opt) => (
                <Pressable
                  key={opt.label}
                  aria-label={opt.label}
                  onPress={() => setGrid(opt.value)}
                  className={`h-8 w-8 items-center justify-center rounded-full ${
                    grid === opt.value ? 'bg-background' : ''
                  }`}
                >
                  <Icon
                    as={opt.icon}
                    className={`h-4 w-4 ${grid === opt.value ? 'text-foreground' : 'text-muted-foreground'}`}
                  />
                </Pressable>
              ))}
            </HStack>
          </HStack>
          <View className="flex-row flex-wrap justify-between gap-y-3">
            {FOLDERS.map((f) => (
              <FolderTile key={f.name} folder={f} grid={grid} />
            ))}
          </View>
        </VStack>

        <VStack className="gap-1">
          <Text className="pb-2 text-lg font-semibold text-foreground">Recent</Text>
          {FILES.map((file) => (
            <Pressable
              key={file.name}
              className="flex-row items-center gap-3 rounded-xl py-2.5 data-[active=true]:bg-muted"
            >
              <View className={`h-11 w-11 items-center justify-center rounded-xl ${file.tint.bg}`}>
                <Icon as={file.icon} className={`h-5 w-5 ${file.tint.text}`} />
              </View>
              <VStack className="flex-1">
                <Text className="text-base font-medium text-foreground" numberOfLines={1}>
                  {file.name}
                </Text>
                <Text className="text-xs text-muted-foreground">{file.meta}</Text>
              </VStack>
              <Icon as={MoreVertical} className="h-4 w-4 text-muted-foreground" />
            </Pressable>
          ))}
        </VStack>
      </ScrollView>

      <Pressable
        aria-label="Upload"
        className="absolute bottom-8 right-5 h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg data-[active=true]:opacity-80"
      >
        <Icon as={Plus} className="h-6 w-6 text-primary-foreground" />
      </Pressable>
    </View>
  );
}
