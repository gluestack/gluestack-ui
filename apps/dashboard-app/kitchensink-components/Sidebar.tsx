import React from "react";
import { VStack, ScrollView } from "../components/ui";
import AmenitiesSection from "./sidebar/AmenitiesSection";
import BookingOptions from "./sidebar/BookingOptions";
import CustomerRatingSection from "./sidebar/CustomerRatingSection";
import FiltersAppliedSection from "./sidebar/FiltersAppliedSection";
import PlaceTypeSection from "./sidebar/PlaceTypeSection";
import PriceRangeSection from "./sidebar/PriceRangeSection";
import SortBySection from "./sidebar/SortBySection";

const Sidebar = () => {
  const [scrollEnabled, setScrollEnabled] = React.useState<boolean>(true);
  return (
    <ScrollView className="w-full" scrollEnabled={scrollEnabled}>
      <VStack space="xl" className="py-6 px-4">
        <FiltersAppliedSection />
        <SortBySection />
        <PlaceTypeSection />
        <AmenitiesSection />
        <PriceRangeSection setScrollEnabled={setScrollEnabled} />
        <BookingOptions />
        <CustomerRatingSection />
      </VStack>
    </ScrollView>
  );
};
export default Sidebar;
