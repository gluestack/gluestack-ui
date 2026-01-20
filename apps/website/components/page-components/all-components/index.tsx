import React from 'react';;
import { Grid,GridItem } from '@/components/ui/grid';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';


  
    
    import accordionComponent from './accordion'

    import actionsheetComponent from './actionsheet'

    import alertComponent from './alert'

    import alertdialogComponent from './alert-dialog'

    import avatarComponent from './avatar'

    import badgeComponent from './badge'

    import boxComponent from './box'

    import buttonComponent from './button'

    import cardComponent from './card'

    import centerComponent from './center'

    import checkboxComponent from './checkbox'

    import dividerComponent from './divider'

    import drawerComponent from './drawer'

    import fabComponent from './fab'

    import formcontrolComponent from './form-control'

    import gridComponent from './grid'

    import headingComponent from './heading'

    import hstackComponent from './hstack'

    import iconComponent from './icon'

    import imageComponent from './image'

    import inputComponent from './input'

    import linkComponent from './link'

    import menuComponent from './menu'

    import modalComponent from './modal'

    import popoverComponent from './popover'

    import portalComponent from './portal'

    import pressableComponent from './pressable'

    import progressComponent from './progress'

    import radioComponent from './radio'

    import selectComponent from './select'

    import skeletonComponent from './skeleton'

    import sliderComponent from './slider'

    import spinnerComponent from './spinner'

    import switchComponent from './switch'

    import tableComponent from './table'

    import textComponent from './text'

    import textareaComponent from './textarea'

    import toastComponent from './toast'

    import tooltipComponent from './tooltip'

    import vstackComponent from './vstack'
  
  

const componentsList = [accordionComponent,actionsheetComponent,alertComponent,alertdialogComponent,avatarComponent,badgeComponent,boxComponent,buttonComponent,cardComponent,centerComponent,checkboxComponent,dividerComponent,drawerComponent,fabComponent,formcontrolComponent,gridComponent,headingComponent,hstackComponent,iconComponent,imageComponent,inputComponent,linkComponent,menuComponent,modalComponent,popoverComponent,portalComponent,pressableComponent,progressComponent,radioComponent,selectComponent,skeletonComponent,sliderComponent,spinnerComponent,switchComponent,tableComponent,textComponent,textareaComponent,toastComponent,tooltipComponent,vstackComponent];
const componentsNameList = ["accordion","actionsheet","alert","alert-dialog","avatar","badge","box","button","card","center","checkbox","divider","drawer","fab","form-control","grid","heading","hstack","icon","image","input","link","menu","modal","popover","portal","pressable","progress","radio","select","skeleton","slider","spinner","switch","table","text","textarea","toast","tooltip","vstack"];
export default function AllComponents() {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: 'sm:grid-cols-2 md:grid-cols-3 grid-cols-1 2xl:grid-cols-4',
      }}
    >
      {componentsNameList.map((componentName,index) => {
        const Component = componentsList[index];

        return (
          <GridItem
            _extra={{
              className: 'col-span-1',
            }}
            key={componentName}
          >
            <Box className="flex h-[300px] border border-border  items-center overflow-hidden justify-center rounded-lg bg-card">
              <Box className="flex-1 w-full flex items-center justify-center origin-center">
                <Component />
              </Box>
              <Box
                className="w-full py-2 px-4 bg-muted cursor-pointer"
                onClick={() => {
                  window.location.href = `/ui/docs/components/${componentName}`;
                }}
              >
                <Text className="text-left text-muted-foreground text-lg font-medium capitalize">
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

  