import React from 'react';
import { VStack } from '../gluestack-ui-components';
import AmenitiesSection from './sidebar/AmenitiesSection';
import BookingOptions from './sidebar/BookingOptions';
import CustomerRatingSection from './sidebar/CustomerRatingSection';
import FiltersAppliedSection from './sidebar/FiltersAppliedSection';
import PlaceTypeSection from './sidebar/PlaceTypeSection';
import PriceRangeSection from './sidebar/PriceRangeSection';
import SortBySection from './sidebar/SortBySection';

const Sidebar = React.memo(() => {
  return (
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
  );
});
export default Sidebar;
