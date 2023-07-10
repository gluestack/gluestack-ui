import React from "react";
import { ScrollView } from "react-native";
import { VStack } from "../gluestack-ui-components";
import AmenitiesSection from "./sidebar/AmenitiesSection";
import BookingOptions from "./sidebar/BookingOptions";
import CustomerRatingSection from "./sidebar/CustomerRatingSection";
import FiltersAppliedSection from "./sidebar/FiltersAppliedSection";
import PlaceTypeSection from "./sidebar/PlaceTypeSection";
import PriceRangeSection from "./sidebar/PriceRangeSection";
import SortBySection from "./sidebar/SortBySection";

const Sidebar = () => {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      // indicatorStyle="yellow"
    >
      <VStack space="xl" py="$6" px="$4">
        <FiltersAppliedSection />
        <VStack space="xl" px="$2">
          <SortBySection />
          <PlaceTypeSection />
          <AmenitiesSection />
          <PriceRangeSection />
          <BookingOptions />
          <CustomerRatingSection />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
