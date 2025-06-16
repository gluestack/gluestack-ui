import React, {useContext} from "react";
import {
  Badge,
  BadgeText,
  Box,
  Button,
  HStack,
  Icon,
  Pressable,
  Text,
  CloseIcon,
  ButtonText
} from "../../components/ui";
import { ThemeContext } from "../../App";

const FiltersAppliedSection = () => {
  const {colorMode} = useContext(ThemeContext);
  const filters = ["Private room", "Wifi", "Air conditioning"];
  const [appliedFilters, setAppliedFilters]: any = React.useState(filters);

  return (
    <Box className="border rounded-md p-4 border-outline-100">
      <HStack className="justify-between items-center">
        <Text size="sm" className="font-medium">
          Filters applied
        </Text>
        <Button
          variant="link"
          size="xs"
          onPress={() => {
            setAppliedFilters([]);
          }}
          className={`${appliedFilters.length === 0 ? "hidden" : "flex"} p-0`}
        >
          <ButtonText>Clear all</ButtonText>
        </Button>
      </HStack>

      <HStack space="sm" className='flex-wrap'>
        {appliedFilters?.map((item: any) => (
          <Badge
            action="muted"
            key={item}
            className="rounded-full px-2.5 py-2 mt-3 items-center">
            <BadgeText className="normal-case text-typography-900">
              {item}
            </BadgeText>
            <Pressable
              className="ml-2 rounded-full"
              onPress={() => {
                const newFilters = appliedFilters.filter((item1: any) => {
                  return item1 !== item;
                });
                setAppliedFilters(newFilters);
              }}
            >
              <Icon
                as={CloseIcon}
                size="sm"
                color={colorMode==='light' ? '#747474' : '#D5D4D4'}
              />
            </Pressable>
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};
export default FiltersAppliedSection;
