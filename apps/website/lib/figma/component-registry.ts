/**
 * Gluestack Component Registry
 *
 * Controlled metadata approach (PRD §7 – Better Approach).
 * Each entry is the source-of-truth for what the Figma plugin
 * will generate. No Fiber heuristics needed here.
 */

export interface ComponentVariantDefinition {
  name: string;
  values: string[];
  defaultValue: string;
}

export interface ComponentSubPart {
  name: string;
  description: string;
}

export interface RegistryEntry {
  /** Display name in Figma */
  name: string;
  /** Import path relative to components/ui */
  importPath: string;
  /** Description shown in Figma plugin UI */
  description: string;
  /** Variant axes extracted from tva() definitions */
  variants: ComponentVariantDefinition[];
  /** Default prop values */
  defaultProps: Record<string, string | number | boolean>;
  /** Sub-components that compose the main component */
  subParts: ComponentSubPart[];
  /** Tailwind base classes (for color/layout extraction) */
  baseClasses: string;
  /** Whether this component wraps children */
  isContainer: boolean;
}

export const COMPONENT_REGISTRY: RegistryEntry[] = [
  // ─────────────────────────────────────────────────────────
  // Button
  // ─────────────────────────────────────────────────────────
  {
    name: 'Button',
    importPath: 'button',
    description: 'Interactive button with multiple variants and sizes.',
    variants: [
      {
        name: 'variant',
        values: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
        defaultValue: 'default',
      },
      {
        name: 'size',
        values: ['default', 'sm', 'lg', 'icon'],
        defaultValue: 'default',
      },
    ],
    defaultProps: { variant: 'default', size: 'default' },
    subParts: [
      { name: 'ButtonText', description: 'Text label inside a Button' },
      { name: 'ButtonIcon', description: 'Icon inside a Button' },
      { name: 'ButtonSpinner', description: 'Loading spinner inside a Button' },
      { name: 'ButtonGroup', description: 'Group of Buttons' },
    ],
    baseClasses:
      'rounded-md flex-row items-center justify-center gap-2 h-fit',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Badge
  // ─────────────────────────────────────────────────────────
  {
    name: 'Badge',
    importPath: 'badge',
    description: 'Status badge / label.',
    variants: [
      {
        name: 'variant',
        values: ['default', 'secondary', 'destructive', 'outline'],
        defaultValue: 'default',
      },
    ],
    defaultProps: { variant: 'default' },
    subParts: [
      { name: 'BadgeText', description: 'Text inside a Badge' },
      { name: 'BadgeIcon', description: 'Icon inside a Badge' },
    ],
    baseClasses: 'flex-row items-center justify-center rounded-sm px-2 py-0.5',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Alert
  // ─────────────────────────────────────────────────────────
  {
    name: 'Alert',
    importPath: 'alert',
    description: 'Alert banner for feedback messages.',
    variants: [
      {
        name: 'variant',
        values: ['default', 'destructive'],
        defaultValue: 'default',
      },
    ],
    defaultProps: { variant: 'default' },
    subParts: [
      { name: 'AlertText', description: 'Text inside an Alert' },
      { name: 'AlertIcon', description: 'Icon inside an Alert' },
    ],
    baseClasses: 'rounded-lg border px-2.5 py-2 flex-row gap-2 items-start',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Input
  // ─────────────────────────────────────────────────────────
  {
    name: 'Input',
    importPath: 'input',
    description: 'Text input field.',
    variants: [],
    defaultProps: {},
    subParts: [
      { name: 'InputField', description: 'The actual text input element' },
      { name: 'InputSlot', description: 'Slot for icons inside Input' },
      { name: 'InputIcon', description: 'Icon inside InputSlot' },
    ],
    baseClasses:
      'h-9 w-full flex-row items-center rounded-md border border-border bg-transparent shadow-xs px-3 gap-2',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Heading
  // ─────────────────────────────────────────────────────────
  {
    name: 'Heading',
    importPath: 'heading',
    description: 'Semantic heading text with size variants.',
    variants: [
      {
        name: 'size',
        values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'font-bold text-foreground',
    isContainer: false,
  },

  // ─────────────────────────────────────────────────────────
  // Text
  // ─────────────────────────────────────────────────────────
  {
    name: 'Text',
    importPath: 'text',
    description: 'Body text element.',
    variants: [
      {
        name: 'size',
        values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'text-foreground',
    isContainer: false,
  },

  // ─────────────────────────────────────────────────────────
  // Card
  // ─────────────────────────────────────────────────────────
  {
    name: 'Card',
    importPath: 'card',
    description: 'Container card component.',
    variants: [
      {
        name: 'variant',
        values: ['elevated', 'outline', 'ghost', 'filled'],
        defaultValue: 'elevated',
      },
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { variant: 'elevated', size: 'md' },
    subParts: [],
    baseClasses: 'rounded-lg bg-card border border-border p-4',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Avatar
  // ─────────────────────────────────────────────────────────
  {
    name: 'Avatar',
    importPath: 'avatar',
    description: 'User avatar with image/fallback.',
    variants: [
      {
        name: 'size',
        values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'AvatarImage', description: 'Avatar image' },
      { name: 'AvatarFallbackText', description: 'Fallback text initials' },
      { name: 'AvatarBadge', description: 'Status badge on Avatar' },
    ],
    baseClasses: 'rounded-full overflow-hidden bg-muted',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Checkbox
  // ─────────────────────────────────────────────────────────
  {
    name: 'Checkbox',
    importPath: 'checkbox',
    description: 'Checkbox input control.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'CheckboxIndicator', description: 'Visual checkbox box' },
      { name: 'CheckboxIcon', description: 'Checkmark icon' },
      { name: 'CheckboxLabel', description: 'Checkbox label text' },
      { name: 'CheckboxGroup', description: 'Group of checkboxes' },
    ],
    baseClasses: 'flex-row gap-2 items-center',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Radio
  // ─────────────────────────────────────────────────────────
  {
    name: 'Radio',
    importPath: 'radio',
    description: 'Radio button input control.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'RadioIndicator', description: 'Visual radio circle' },
      { name: 'RadioIcon', description: 'Radio icon' },
      { name: 'RadioLabel', description: 'Radio label text' },
      { name: 'RadioGroup', description: 'Group of radio buttons' },
    ],
    baseClasses: 'flex-row gap-2 items-center',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Switch
  // ─────────────────────────────────────────────────────────
  {
    name: 'Switch',
    importPath: 'switch',
    description: 'Toggle switch control.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'rounded-full',
    isContainer: false,
  },

  // ─────────────────────────────────────────────────────────
  // Spinner
  // ─────────────────────────────────────────────────────────
  {
    name: 'Spinner',
    importPath: 'spinner',
    description: 'Loading spinner indicator.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: '',
    isContainer: false,
  },

  // ─────────────────────────────────────────────────────────
  // Divider
  // ─────────────────────────────────────────────────────────
  {
    name: 'Divider',
    importPath: 'divider',
    description: 'Horizontal or vertical divider line.',
    variants: [
      {
        name: 'orientation',
        values: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
    ],
    defaultProps: { orientation: 'horizontal' },
    subParts: [],
    baseClasses: 'bg-border',
    isContainer: false,
  },

  // ─────────────────────────────────────────────────────────
  // Progress
  // ─────────────────────────────────────────────────────────
  {
    name: 'Progress',
    importPath: 'progress',
    description: 'Progress bar indicator.',
    variants: [
      {
        name: 'size',
        values: ['xs', 'sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md', value: 50 },
    subParts: [{ name: 'ProgressFilledTrack', description: 'Filled portion of progress bar' }],
    baseClasses: 'w-full rounded-full bg-secondary',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Slider
  // ─────────────────────────────────────────────────────────
  {
    name: 'Slider',
    importPath: 'slider',
    description: 'Range slider input.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
      {
        name: 'orientation',
        values: ['horizontal', 'vertical'],
        defaultValue: 'horizontal',
      },
    ],
    defaultProps: { size: 'md', orientation: 'horizontal' },
    subParts: [
      { name: 'SliderTrack', description: 'Slider track' },
      { name: 'SliderFilledTrack', description: 'Filled portion of track' },
      { name: 'SliderThumb', description: 'Draggable thumb' },
    ],
    baseClasses: 'justify-center items-center',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Textarea
  // ─────────────────────────────────────────────────────────
  {
    name: 'Textarea',
    importPath: 'textarea',
    description: 'Multi-line text input.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [{ name: 'TextareaInput', description: 'Textarea input field' }],
    baseClasses: 'w-full rounded-md border border-border bg-transparent p-3',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Select
  // ─────────────────────────────────────────────────────────
  {
    name: 'Select',
    importPath: 'select',
    description: 'Dropdown select input.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'SelectTrigger', description: 'Select trigger button' },
      { name: 'SelectInput', description: 'Display text of selected value' },
      { name: 'SelectIcon', description: 'Chevron icon' },
      { name: 'SelectPortal', description: 'Portal for dropdown' },
      { name: 'SelectBackdrop', description: 'Backdrop overlay' },
      { name: 'SelectContent', description: 'Dropdown content' },
      { name: 'SelectItem', description: 'Individual option item' },
      { name: 'SelectItemText', description: 'Text of option item' },
    ],
    baseClasses: '',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Modal
  // ─────────────────────────────────────────────────────────
  {
    name: 'Modal',
    importPath: 'modal',
    description: 'Overlay modal dialog.',
    variants: [
      {
        name: 'size',
        values: ['xs', 'sm', 'md', 'lg', 'full'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'ModalBackdrop', description: 'Modal backdrop overlay' },
      { name: 'ModalContent', description: 'Modal content container' },
      { name: 'ModalHeader', description: 'Modal header' },
      { name: 'ModalBody', description: 'Modal body content' },
      { name: 'ModalFooter', description: 'Modal footer actions' },
      { name: 'ModalCloseButton', description: 'Close button' },
    ],
    baseClasses: 'rounded-xl bg-card border border-border p-6',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Toast
  // ─────────────────────────────────────────────────────────
  {
    name: 'Toast',
    importPath: 'toast',
    description: 'Notification toast message.',
    variants: [
      {
        name: 'variant',
        values: ['solid', 'outline'],
        defaultValue: 'solid',
      },
      {
        name: 'action',
        values: ['error', 'warning', 'success', 'info', 'muted'],
        defaultValue: 'muted',
      },
    ],
    defaultProps: { variant: 'solid', action: 'muted' },
    subParts: [
      { name: 'ToastTitle', description: 'Toast title text' },
      { name: 'ToastDescription', description: 'Toast description text' },
    ],
    baseClasses: 'rounded-lg p-4 gap-1 w-full shadow-lg',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Tabs
  // ─────────────────────────────────────────────────────────
  {
    name: 'Tabs',
    importPath: 'tabs',
    description: 'Tabbed navigation component.',
    variants: [],
    defaultProps: {},
    subParts: [
      { name: 'TabsList', description: 'Container for tab triggers' },
      { name: 'TabsTrigger', description: 'Individual tab trigger button' },
      { name: 'TabsContent', description: 'Content for a tab panel' },
    ],
    baseClasses: '',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Accordion
  // ─────────────────────────────────────────────────────────
  {
    name: 'Accordion',
    importPath: 'accordion',
    description: 'Collapsible accordion sections.',
    variants: [
      {
        name: 'variant',
        values: ['unfilled', 'filled'],
        defaultValue: 'unfilled',
      },
      {
        name: 'type',
        values: ['single', 'multiple'],
        defaultValue: 'single',
      },
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { variant: 'unfilled', type: 'single', size: 'md' },
    subParts: [
      { name: 'AccordionItem', description: 'Individual accordion section' },
      { name: 'AccordionHeader', description: 'Accordion section header' },
      { name: 'AccordionTrigger', description: 'Clickable trigger for section' },
      { name: 'AccordionContent', description: 'Collapsible content' },
      { name: 'AccordionIcon', description: 'Chevron icon' },
      { name: 'AccordionTitleText', description: 'Title text inside header' },
      { name: 'AccordionContentText', description: 'Text inside content' },
    ],
    baseClasses: 'w-full',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // FormControl
  // ─────────────────────────────────────────────────────────
  {
    name: 'FormControl',
    importPath: 'form-control',
    description: 'Wraps form fields with label and helper text.',
    variants: [
      {
        name: 'size',
        values: ['sm', 'md', 'lg'],
        defaultValue: 'md',
      },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'FormControlLabel', description: 'Label for form field' },
      { name: 'FormControlLabelText', description: 'Text inside label' },
      { name: 'FormControlHelper', description: 'Helper text container' },
      { name: 'FormControlHelperText', description: 'Helper text' },
      { name: 'FormControlError', description: 'Error container' },
      { name: 'FormControlErrorText', description: 'Error message text' },
      { name: 'FormControlErrorIcon', description: 'Error icon' },
    ],
    baseClasses: 'gap-1.5',
    isContainer: true,
  },

  // ─────────────────────────────────────────────────────────
  // Skeleton
  // ─────────────────────────────────────────────────────────
  {
    name: 'Skeleton',
    importPath: 'skeleton',
    description: 'Loading skeleton placeholder.',
    variants: [
      {
        name: 'variant',
        values: ['sharp', 'rounded', 'circular'],
        defaultValue: 'rounded',
      },
    ],
    defaultProps: { variant: 'rounded' },
    subParts: [{ name: 'SkeletonText', description: 'Multi-line text skeleton' }],
    baseClasses: 'bg-muted animate-pulse',
    isContainer: false,
  },
];

/** Get a registry entry by component name (case-insensitive) */
export function getComponentByName(name: string): RegistryEntry | undefined {
  return COMPONENT_REGISTRY.find(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );
}

/** Get all component names */
export function getComponentNames(): string[] {
  return COMPONENT_REGISTRY.map((c) => c.name);
}

/** Generate all variant combinations for a component */
export function getVariantCombinations(
  entry: RegistryEntry
): Array<Record<string, string>> {
  if (entry.variants.length === 0) return [{}];

  const combinations: Array<Record<string, string>> = [{}];

  for (const variant of entry.variants) {
    const expanded: Array<Record<string, string>> = [];
    for (const existing of combinations) {
      for (const value of variant.values) {
        expanded.push({ ...existing, [variant.name]: value });
      }
    }
    combinations.splice(0, combinations.length, ...expanded);
  }

  return combinations;
}
