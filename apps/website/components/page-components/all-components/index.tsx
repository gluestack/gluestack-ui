import React from 'react';
import sidebarData from '@/sidebar.json';
import { GridItem } from '@/components/ui/grid';
import { Box, Grid } from '@/components/ui';
import { Text } from '@/components/ui/text';

import heading from './heading';
import text from './text';
import box from './box';
import center from './center';
import divider from './divider';

import hstack from './hstack'
import vstack from './vstack'
import grid from './grid'
import alert from './alert'
import progress from './progress'
import spinner from './spinner'
import toast from './toast'
import badge from './badge'
import card from './card'
import button from './button'
import checkbox from './checkbox'
import formControl from './form-control'
import input from './input'
import link from './link'
import pressable from './pressable'
import radio from './radio'
import select from './select'
import slider from './slider'

import textarea from './textarea'
import alertDialog from './alert-dialog'
import drawer from './drawer'
import menu from './menu'
import modal from './modal'
import popover from './popover'
import portal from './portal'
import tooltip from './tooltip'
import actionsheet from './actionsheet'
import accordion from './accordion'

import avatar from './avatar'
import image from './image'
import icon from './icon'
import fab from './fab'
import skeleton from './skeleton'

const componentsList = [heading, text, box, center, divider, hstack, vstack, grid, alert, progress, spinner, toast, badge, card, button, checkbox, formControl, input, link, pressable, radio, select, slider, textarea, alertDialog, drawer, menu, modal, popover, portal, tooltip, actionsheet, accordion, avatar, image, icon, fab, skeleton];

export default function AllComponents() {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'sm:grid-cols-2 md:grid-cols-3 grid-cols-1 2xl:grid-cols-4',
      }}
    >
      {componentsList.sort().map((componentName) => {
        

        return (
          <GridItem
            _extra={{
              className: 'col-span-1',
            }}
            key={componentName.name}
          >
            <Box className="flex h-[250px] border border-outline-100  items-center overflow-hidden justify-center rounded-lg dark:bg-black bg-white">
              <Box className="flex-1 w-full flex items-center justify-center origin-center scale-75">
              {componentName()}
              </Box>
              <Box
                className="w-full py-2 px-4 bg-background-100 cursor-pointer"
                onClick={() => {
                  window.location.href = `/ui/docs/components/${componentName.name}`;
                }}
              >
                <Text className="text-left text-typography-700 text-lg font-medium capitalize">
                  {componentName.name}
                </Text>
              </Box>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}
