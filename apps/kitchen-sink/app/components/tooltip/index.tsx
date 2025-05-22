import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { Button, ButtonText } from '@/components/ui/button';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView>
        <ScrollView>
      <ComponentPreviewer props={{
  "placement": {
    "control": {
      "type": "select"
    },
    "options": [
      "top",
      "top left",
      "top right",
      "bottom",
      "bottom left",
      "bottom right",
      "left",
      "left top",
      "left bottom",
      "right",
      "right top",
      "right bottom"
    ],
    "defaultValue": "top"
  }
}}>
  {props => {
  return (
    <Tooltip
      placement={props.placement}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        )
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
  )}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}