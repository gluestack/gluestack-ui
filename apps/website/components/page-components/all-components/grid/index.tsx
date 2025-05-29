import { ComponentPreviewer } from "@/components/custom/component-previewer";
import { Grid } from "@/components/ui/grid";
import { GridItem } from "@/components/ui/grid";

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Grid
      className="gap-5"
      _extra=\\{{className: "grid-cols-8"}}
    >
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra=\\{{className: "col-span-3"}}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra=\\{{className: "col-span-5"}}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra=\\{{className: "col-span-6"}}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra=\\{{className: "col-span-4"}}
      />
      <GridItem
        className="bg-background-50 p-6 rounded-md"
        _extra=\\{{className: "col-span-4"}}
      />
    </Grid>
  )
}`}
      argTypes={{}}
      reactLive={{ Grid, GridItem }}
    />
  );
}
