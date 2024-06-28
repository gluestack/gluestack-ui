import React from 'react';
import { Fab, FabIcon, FabLabel } from '@/components/ui/fab';
import { MenuIcon } from '@/components/ui/icon';

const FabBasic = ({ ...props }: any) => {
  return (
    <Fab {...props}>
      <FabIcon as={MenuIcon} />
      <FabLabel>Menu</FabLabel>
    </Fab>
  );
};

FabBasic.description =
  'This is a basic Fab component example. The Floating Action Button (FAB) is a dynamic button that stays visible and provides access to a primary action throughout the users journey in the application. It is a powerful UI element that adds a touch of elegance and convenience to the user experience.';

export default FabBasic;

export { Fab, FabIcon, FabLabel, MenuIcon };
