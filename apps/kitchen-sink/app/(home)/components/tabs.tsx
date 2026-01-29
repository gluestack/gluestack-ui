


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
<!-- Failed to load CodePreviewer for Example:basic -->
};

const ExampleBasic = () => {
<!-- Failed to load CodePreviewer for Example:basic -->
};

const ExampleWithindicator = () => {
<!-- Failed to load CodePreviewer for Example:with-indicator -->
};

const ExampleVertical = () => {
<!-- Failed to load CodePreviewer for Example:vertical -->
};

const ExampleWithicons = () => {
<!-- Failed to load CodePreviewer for Example:with-icons -->
};

const ExampleVariants = () => {
<!-- Failed to load CodePreviewer for Example:variants -->
};

const ExampleSizes = () => {
<!-- Failed to load CodePreviewer for Example:sizes -->
};

const ExampleScrollable = () => {
<!-- Failed to load CodePreviewer for Example:scrollable -->
};

const ExampleManualactivation = () => {
<!-- Failed to load CodePreviewer for Example:manual-activation -->
};

const ExampleControlled = () => {
<!-- Failed to load CodePreviewer for Example:controlled -->
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-indicator",
    label: "With-indicator",
    content: <ExampleWithindicator />,
  },
  {
    value: "vertical",
    label: "Vertical",
    content: <ExampleVertical />,
  },
  {
    value: "with-icons",
    label: "With-icons",
    content: <ExampleWithicons />,
  },
  {
    value: "variants",
    label: "Variants",
    content: <ExampleVariants />,
  },
  {
    value: "sizes",
    label: "Sizes",
    content: <ExampleSizes />,
  },
  {
    value: "scrollable",
    label: "Scrollable",
    content: <ExampleScrollable />,
  },
  {
    value: "manual-activation",
    label: "Manual-activation",
    content: <ExampleManualactivation />,
  },
  {
    value: "controlled",
    label: "Controlled",
    content: <ExampleControlled />,
  }
];

export default function TabsScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}