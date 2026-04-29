import { Text } from "@/components/ui/text";
import { Popover, PopoverArrow, PopoverBackdrop, PopoverBody, PopoverContent } from "@/components/ui/popover";
import { Pressable } from "react-native";
import { Box } from "@/components/ui/box";

// This will behave unexpectedly on web and not at all on mobile
export default function MyComponent() {
  return <Box className="bg-background flex-1 justify-center items-center"><Text className=""> This is my inlined content, should absolutely <ClickMePopover/>. This is important...</Text></Box>
}

function ClickMePopover() {
  return (
    <Popover
      trigger={
        (props) => <Pressable {...props} className="">
          <Text className="leading-0">click me !</Text>
        </Pressable>
      }
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text>This is my popover content</Text>
        </PopoverBody>
      </PopoverContent>

    </Popover>
  )
}