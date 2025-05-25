import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip'
import { Button, ButtonText } from '@/components/ui/button'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
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
}} title={undefined}>
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
  );
}