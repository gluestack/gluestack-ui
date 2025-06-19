import React from 'react';
import sidebarData from '@/sidebar.json';
import { GridItem } from '@/components/ui/grid';
import { Box, Grid } from '@/components/ui';
import { Text } from '@/components/ui/text';

// Direct static imports - much simpler and faster!
import AccordionComponent from './accordion';
import ActionsheetComponent from './actionsheet';
import AlertComponent from './alert';
import AlertDialogComponent from './alert-dialog';
import AvatarComponent from './avatar';
import BadgeComponent from './badge';
import BoxComponent from './box';
import ButtonComponent from './button';
import CardComponent from './card';
import CenterComponent from './center';
import CheckboxComponent from './checkbox';
import DividerComponent from './divider';
import DrawerComponent from './drawer';
import FabComponent from './fab';
import FormControlComponent from './form-control';
import GridComponent from './grid';
import HeadingComponent from './heading';
import HstackComponent from './hstack';
import IconComponent from './icon';
import ImageComponent from './image';
import InputComponent from './input';
import LinkComponent from './link';
import MenuComponent from './menu';
import ModalComponent from './modal';
import PopoverComponent from './popover';
import PortalComponent from './portal';
import PressableComponent from './pressable';
import ProgressComponent from './progress';
import RadioComponent from './radio';
import SelectComponent from './select';
import SkeletonComponent from './skeleton';
import SliderComponent from './slider';
import SpinnerComponent from './spinner';
import SwitchComponent from './switch';
import TableComponent from './table';
import TextComponent from './text';
import TextareaComponent from './textarea';
import ToastComponent from './toast';
import TooltipComponent from './tooltip';
import VstackComponent from './vstack';

const getComponentsFromSidebar = () => {
  // Find the Components section
  const componentsSection = sidebarData.navigation.sections.find(
    (section) => section.title === 'Components'
  );

  if (!componentsSection) return [];

  // Get all subsections that are of type "heading"
  const componentHeadings = componentsSection.subsections.filter(
    (subsection) => subsection.type === 'heading'
  );

  // Extract all component items from each heading
  const components = componentHeadings.reduce((acc: string[], heading) => {
    const componentItems = heading.items || [];
    const componentNames = componentItems.map((item) => {
      // Extract component name from path, e.g., "/ui/docs/components/button" -> "button"
      const pathParts = item.path?.split('/') || [];
      return pathParts[pathParts.length - 1];
    });
    return [...acc, ...componentNames];
  }, []);

  // Filter out any empty or undefined values and components we don't want to show
  return components.filter(
    (component) => component && component !== '' // Exclude specific components that might not have implementations
  );
};

// Component mapping - direct references, no async loading needed!
const componentMap: { [key: string]: React.ComponentType } = {
  'accordion': AccordionComponent,
  'actionsheet': ActionsheetComponent,
  'alert': AlertComponent,
  'alert-dialog': AlertDialogComponent,
  'avatar': AvatarComponent,
  'badge': BadgeComponent,
  'box': BoxComponent,
  'button': ButtonComponent,
  'card': CardComponent,
  'center': CenterComponent,
  'checkbox': CheckboxComponent,
  'divider': DividerComponent,
  'drawer': DrawerComponent,
  'fab': FabComponent,
  'form-control': FormControlComponent,
  'grid': GridComponent,
  'heading': HeadingComponent,
  'hstack': HstackComponent,
  'icon': IconComponent,
  'image': ImageComponent,
  'input': InputComponent,
  'link': LinkComponent,
  'menu': MenuComponent,
  'modal': ModalComponent,
  'popover': PopoverComponent,
  'portal': PortalComponent,
  'pressable': PressableComponent,
  'progress': ProgressComponent,
  'radio': RadioComponent,
  'select': SelectComponent,
  'skeleton': SkeletonComponent,
  'slider': SliderComponent,
  'spinner': SpinnerComponent,
  'switch': SwitchComponent,
  'table': TableComponent,
  'text': TextComponent,
  'textarea': TextareaComponent,
  'toast': ToastComponent,
  'tooltip': TooltipComponent,
  'vstack': VstackComponent,
};

const componentsList = getComponentsFromSidebar();

export default function AllComponents() {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'sm:grid-cols-2 md:grid-cols-3 grid-cols-1 2xl:grid-cols-4',
      }}
    >
      {componentsList.sort().map((componentName) => {
        const Component = componentMap[componentName];
        if (!Component) return null;

        return (
          <GridItem
            _extra={{
              className: 'col-span-1',
            }}
            key={componentName}
          >
            <Box className="flex h-[250px] border border-outline-100  items-center overflow-hidden justify-center rounded-lg dark:bg-black bg-white">
              <Box className="flex-1 w-full flex items-center justify-center origin-center scale-75">
                <Component />
              </Box>
              <Box
                className="w-full py-2 px-4 bg-background-100 cursor-pointer"
                onClick={() => {
                  window.location.href = `/ui/docs/components/${componentName}`;
                }}
              >
                <Text className="text-left text-typography-700 text-lg font-medium capitalize">
                  {componentName}
                </Text>
              </Box>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}
