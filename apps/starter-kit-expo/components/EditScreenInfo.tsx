import React from "react";

import { ExternalLink } from "./ExternalLink";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <Box>
      <Box className="items-center mx-4">
        <Text className="text-center text-black/80">
          Open up the code for this screen:
        </Text>
        <Box className="rounded-sm px-1 my-2 bg-secondary-200">
          <Text className="text-sm leading-5 text-center font-SpaceMono">
            {path}
          </Text>
        </Box>

        <Text className="text-center text-black/80">
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </Box>

      <Box className="mt-4 mx-5 items-center">
        <ExternalLink
          style={{ paddingVertical: 15 }}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text className="text-center">
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </Box>
    </Box>
  );
}
