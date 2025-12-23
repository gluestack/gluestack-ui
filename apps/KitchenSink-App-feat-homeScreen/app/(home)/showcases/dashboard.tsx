import React, { useState } from 'react';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { ScrollView } from '@/components/ui/scroll-view';

import { CheckIcon, X } from 'lucide-react-native';
import { Icon } from '@/components/ui/icon';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui/slider';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';

type FilterChipProps = {
  label: string;
  onRemove?: () => void;
};
export const InitialFilters = [
  'Cycling',
  '15 Miles',
  '10% grade',
  'Riverside trails',
];

export const Sports = ['All', 'Cycling', 'Marathon', 'Running', 'Trekking'];

export const TerrainTypes = [
  ['Asphalt roads', 'Summit tracks'],
  ['Gravel roads', 'Riverside trails'],
  ['Dirt tracks', 'Gorge routes'],
  ['Foothill paths', 'Canyon tracks'],
  ['Hilltop trails', 'Waterfall track'],
];

const FilterChip = ({ label, onRemove }: FilterChipProps) => (
  <Pressable
    className="flex-row items-center border border-border rounded-full px-3 py-1.5 mr-1"
    onPress={onRemove}
  >
    <Text className="text-foreground/50 text-sm  mr-2">{label}</Text>
    <Icon as={X} size="sm" className="text-border" />
  </Pressable>
);

const CheckboxItem = ({ label, checked, onToggle }: any) => {
  return (
    <Checkbox
      value={label}
      onChange={onToggle}
      isChecked={checked}
      className="p-2 gap-3"
    >
      <CheckboxIndicator className=" data-[checked=true]:bg-[rgb(99,173,255)] data-[checked=true]:border-[rgb(99,173,255)] data-[checked=true]:dark:bg-[rgb(99,173,255)] data-[checked=true]:dark:border-[rgb(99,173,255)]">
        <CheckboxIcon as={CheckIcon} className="" />
      </CheckboxIndicator>
      <CheckboxLabel className="text-foreground/50 font-body">
        {label}
      </CheckboxLabel>
    </Checkbox>
  );
};

export default function Filters() {
  const insets = useSafeAreaInsets();
  const [activeFilters, setActiveFilters] = useState(InitialFilters);
  const [selectedSport, setSelectedSport] = useState('Cycling');
  const [elevation, setElevation] = useState(10);
  const [length, setLength] = useState(15);
  const [selectedTerrain, setSelectedTerrain] = useState(['Riverside trails']);
  const [isSliding, setIsSliding] = useState(false);

  const handleResetFilters = () => {
    setSelectedSport('All');
    setElevation(10);
    setLength(15);
    setSelectedTerrain([]);
  };

  const handleTerrainToggle = (terrain: string) => {
    setSelectedTerrain((prev) =>
      prev.includes(terrain)
        ? prev.filter((t) => t !== terrain)
        : [...prev, terrain]
    );
  };

  return (
    <Box className="flex-1">
      <HStack className="justify-between items-center px-5 pt-3">
        <Text className="text-foreground  text-xl font-semibold">Filters</Text>
        <Pressable onPress={() => router.back()}>
          <Icon as={X} size="lg" className="text-foreground/50" />
        </Pressable>
      </HStack>
      <ScrollView
        className="flex-1 pb-6"
        showsVerticalScrollIndicator={false}
        scrollEnabled={!isSliding}
      >
        <ScrollView
          horizontal
          className="pt-5"
          showsHorizontalScrollIndicator={false}
        >
          <HStack className="flex-1 pl-5 mb-6">
            {activeFilters.map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                onRemove={() =>
                  setActiveFilters(activeFilters.filter((f) => f !== filter))
                }
              />
            ))}
          </HStack>
        </ScrollView>

        <VStack className="px-5">
          <Text className="text-foreground text-lg  mb-2">Sport</Text>
          <VStack>
            {Sports.map((sport) => (
              <CheckboxItem
                key={sport}
                label={sport}
                checked={selectedSport === sport}
                onToggle={() => setSelectedSport(sport)}
              />
            ))}
          </VStack>

          <Text className="text-foreground text-lg font-poppins mt-6">
            Elevation
          </Text>

          <Slider
            defaultValue={30}
            orientation="horizontal"
            isDisabled={false}
            isReversed={false}
            className="my-5"
          >
            <SliderTrack>
              <SliderFilledTrack className="bg-[rgb(99,173,255)]" />
            </SliderTrack>
            <SliderThumb className="h-7 w-7 bg-[rgb(99,173,255)] border-0" />
          </Slider>

          <HStack className="justify-between">
            <Text className="text-gray-400 text-sm font-dmsans">0 grade</Text>
            <Text className="text-gray-400 text-sm font-dmsans">20% grade</Text>
          </HStack>

          <Text className="text-typography-900 text-lg font-poppins mt-6">
            Length
          </Text>

          <Slider
            defaultValue={15}
            orientation="horizontal"
            isDisabled={false}
            isReversed={false}
            className="my-5"
          >
            <SliderTrack>
              <SliderFilledTrack className="bg-[rgb(99,173,255)]" />
            </SliderTrack>
            <SliderThumb className="h-7 w-7 bg-[rgb(99,173,255)] border-0" />
          </Slider>

          <HStack className="justify-between">
            <Text className="text-gray-400 text-sm font-dmsans">0 miles</Text>
            <Text className="text-gray-400 text-sm font-dmsans">20 miles</Text>
          </HStack>

          <Text className="text-typography-900 text-lg font-poppins mt-6">
            Terrain
          </Text>
          <Box className="flex-row flex-wrap mt-2">
            {TerrainTypes.map((row, i) => (
              <Box key={i} className="w-1/2">
                {row.map((terrain) => (
                  <CheckboxItem
                    key={terrain}
                    label={terrain}
                    checked={selectedTerrain.includes(terrain)}
                    onToggle={() => handleTerrainToggle(terrain)}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </VStack>
      </ScrollView>

      <HStack
        className="mx-5 my-4 gap-3"
        style={{ paddingBottom: insets.bottom }}
      >
        <Button
          variant="outline"
          className="flex-1 rounded-full border-primary-500"
          onPress={handleResetFilters}
        >
          <ButtonText className=" data-[active=true]:text-white font-poppins">
            Reset
          </ButtonText>
        </Button>
        <Button className="flex-1 rounded-full bg-[rgb(18,244,142)] data-[active=true]:bg-[rgb(18,244,142)]">
          <ButtonText className=" font-poppins">Save</ButtonText>
        </Button>
      </HStack>
    </Box>
  );
}
