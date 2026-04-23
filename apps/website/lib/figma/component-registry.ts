/**
 * Gluestack Component Registry
 *
 * Each entry is the source-of-truth for what the Figma plugin generates.
 *
 * `baseClasses`    — Tailwind classes shared by ALL variants of the component.
 * `variantClasses` — Per-prop-value overrides, e.g. { variant: { default: 'bg-primary …' } }.
 * `subPartClasses` — Tailwind classes for each named sub-part/child node.
 *
 * All class strings are resolved by the Tailwind class parser in
 * design-system-exporter.ts which reads actual color values from config.ts.
 * Nothing is hardcoded.
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
  name: string;
  importPath: string;
  description: string;
  variants: ComponentVariantDefinition[];
  defaultProps: Record<string, string | number | boolean>;
  subParts: ComponentSubPart[];
  baseClasses: string;
  isContainer: boolean;
  /** Per-prop-value extra class strings merged on top of baseClasses */
  variantClasses?: Record<string, Record<string, string>>;
  /** Per-subPart name → Tailwind class strings used to style that child node */
  subPartClasses?: Record<string, string>;
}

export const COMPONENT_REGISTRY: RegistryEntry[] = [
  // ───────────────────────────────────────────
  // Button
  // ───────────────────────────────────────────
  {
    name: 'Button',
    importPath: 'button',
    description: 'Interactive button with multiple variants and sizes.',
    variants: [
      { name: 'variant', values: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'], defaultValue: 'default' },
      { name: 'size', values: ['default', 'sm', 'lg', 'icon'], defaultValue: 'default' },
    ],
    defaultProps: { variant: 'default', size: 'default' },
    subParts: [
      { name: 'ButtonText', description: 'Text label inside a Button' },
      { name: 'ButtonIcon', description: 'Icon inside a Button' },
    ],
    baseClasses: 'flex-row items-center justify-center rounded-md gap-2',
    isContainer: true,
    variantClasses: {
      variant: {
        default:     'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-primary-foreground',
        outline:     'border border-border bg-background text-foreground',
        secondary:   'bg-secondary text-secondary-foreground',
        ghost:       'bg-transparent text-foreground',
        link:        'bg-transparent text-primary',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm',
        sm:      'h-8 px-3 text-xs',
        lg:      'h-10 px-8 text-sm',
        icon:    'h-9 w-9',
      },
    },
    subPartClasses: {
      ButtonText: 'text-sm font-medium',
      ButtonIcon: '',
    },
  },

  // ───────────────────────────────────────────
  // Badge
  // ───────────────────────────────────────────
  {
    name: 'Badge',
    importPath: 'badge',
    description: 'Status badge / label.',
    variants: [
      { name: 'variant', values: ['default', 'secondary', 'destructive', 'outline'], defaultValue: 'default' },
    ],
    defaultProps: { variant: 'default' },
    subParts: [
      { name: 'BadgeText', description: 'Text inside a Badge' },
    ],
    baseClasses: 'flex-row items-center justify-center rounded-sm px-2 py-0.5 gap-1',
    isContainer: true,
    variantClasses: {
      variant: {
        default:     'bg-primary text-primary-foreground',
        secondary:   'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-primary-foreground',
        outline:     'border border-border text-foreground',
      },
    },
    subPartClasses: {
      BadgeText: 'text-xs font-medium',
    },
  },

  // ───────────────────────────────────────────
  // Alert
  // ───────────────────────────────────────────
  {
    name: 'Alert',
    importPath: 'alert',
    description: 'Alert banner for feedback messages.',
    variants: [
      { name: 'variant', values: ['default', 'destructive'], defaultValue: 'default' },
    ],
    defaultProps: { variant: 'default' },
    subParts: [
      { name: 'AlertTitle', description: 'Alert title text' },
      { name: 'AlertDescription', description: 'Alert description text' },
    ],
    baseClasses: 'rounded-lg border px-3 py-2 flex-col gap-1 items-start',
    isContainer: true,
    variantClasses: {
      variant: {
        default:     'bg-background border-border text-foreground',
        destructive: 'bg-background border-destructive text-destructive',
      },
    },
    subPartClasses: {
      AlertTitle:       'text-sm font-semibold',
      AlertDescription: 'text-sm font-normal',
    },
  },

  // ───────────────────────────────────────────
  // Input
  // ───────────────────────────────────────────
  {
    name: 'Input',
    importPath: 'input',
    description: 'Text input field.',
    variants: [],
    defaultProps: {},
    subParts: [
      { name: 'InputField', description: 'The actual text input element' },
    ],
    baseClasses: 'h-9 flex-row items-center rounded-md border border-border bg-transparent px-3 gap-2',
    isContainer: true,
    subPartClasses: {
      InputField: 'text-sm text-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Textarea
  // ───────────────────────────────────────────
  {
    name: 'Textarea',
    importPath: 'textarea',
    description: 'Multi-line text input.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [{ name: 'TextareaInput', description: 'Textarea input field' }],
    baseClasses: 'rounded-md border border-border bg-transparent p-3 flex-col',
    isContainer: true,
    variantClasses: {
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
      },
    },
    subPartClasses: {
      TextareaInput: 'text-sm text-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Heading
  // ───────────────────────────────────────────
  {
    name: 'Heading',
    importPath: 'heading',
    description: 'Semantic heading text with size variants.',
    variants: [
      { name: 'size', values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'font-bold text-foreground',
    isContainer: false,
    variantClasses: {
      size: {
        xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg',
        xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl',
        '4xl': 'text-4xl', '5xl': 'text-5xl',
      },
    },
  },

  // ───────────────────────────────────────────
  // Text
  // ───────────────────────────────────────────
  {
    name: 'Text',
    importPath: 'text',
    description: 'Body text element.',
    variants: [
      { name: 'size', values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'text-foreground',
    isContainer: false,
    variantClasses: {
      size: {
        xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg',
        xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl',
        '4xl': 'text-4xl', '5xl': 'text-5xl',
      },
    },
  },

  // ───────────────────────────────────────────
  // Card
  // ───────────────────────────────────────────
  {
    name: 'Card',
    importPath: 'card',
    description: 'Container card component.',
    variants: [
      { name: 'variant', values: ['elevated', 'outline', 'ghost', 'filled'], defaultValue: 'elevated' },
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { variant: 'elevated', size: 'md' },
    subParts: [
      { name: 'CardTitle', description: 'Card title' },
      { name: 'CardDescription', description: 'Card description text' },
    ],
    baseClasses: 'rounded-lg flex-col gap-2',
    isContainer: true,
    variantClasses: {
      variant: {
        elevated: 'bg-card border border-border',
        outline:  'border border-border bg-transparent',
        ghost:    'bg-transparent border-transparent',
        filled:   'bg-muted border-transparent',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    subPartClasses: {
      CardTitle:       'text-base font-semibold text-foreground',
      CardDescription: 'text-sm font-normal text-muted-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Avatar
  // ───────────────────────────────────────────
  {
    name: 'Avatar',
    importPath: 'avatar',
    description: 'User avatar with image/fallback.',
    variants: [
      { name: 'size', values: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'AvatarFallbackText', description: 'Fallback initials' },
    ],
    baseClasses: 'rounded-full items-center justify-center bg-muted flex-row',
    isContainer: true,
    variantClasses: {
      size: {
        xs:  'h-6 w-6',
        sm:  'h-8 w-8',
        md:  'h-10 w-10',
        lg:  'h-12 w-12',
        xl:  'h-16 w-16',
        '2xl': 'h-20 w-20',
      },
    },
    subPartClasses: {
      AvatarFallbackText: 'text-xs font-medium text-foreground',
      AvatarBadge: 'h-3 w-3 rounded-full bg-muted border border-background',
    },
  },

  // ───────────────────────────────────────────
  // Checkbox
  // ───────────────────────────────────────────
  {
    name: 'Checkbox',
    importPath: 'checkbox',
    description: 'Checkbox input control.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'CheckboxIndicator', description: 'Visual checkbox box' },
      { name: 'CheckboxLabel', description: 'Checkbox label text' },
    ],
    baseClasses: 'flex-row gap-2 items-center',
    isContainer: true,
    variantClasses: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    subPartClasses: {
      CheckboxIndicator: 'justify-center items-center w-4 h-4 rounded border border-input bg-background',
      CheckboxLabel:     'text-sm font-medium text-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Radio
  // ───────────────────────────────────────────
  {
    name: 'Radio',
    importPath: 'radio',
    description: 'Radio button input control.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'RadioIndicator', description: 'Visual radio circle' },
      { name: 'RadioLabel', description: 'Radio label text' },
    ],
    baseClasses: 'flex-row gap-2 items-center',
    isContainer: true,
    variantClasses: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
      },
    },
    subPartClasses: {
      RadioIndicator: 'justify-center items-center w-4 h-4 rounded-full border border-input bg-background',
      RadioLabel:     'text-sm font-medium text-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Switch
  // ───────────────────────────────────────────
  {
    name: 'Switch',
    importPath: 'switch',
    description: 'Toggle switch control.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'rounded-full flex-row items-center bg-muted border border-border',
    isContainer: false,
    variantClasses: {
      size: {
        sm: 'h-4 w-8',
        md: 'h-6 w-11',
        lg: 'h-7 w-14',
      },
    },
  },

  // ───────────────────────────────────────────
  // Spinner
  // ───────────────────────────────────────────
  {
    name: 'Spinner',
    importPath: 'spinner',
    description: 'Loading spinner indicator.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [],
    baseClasses: 'rounded-full border-2 border-border border-t-primary items-center justify-center',
    isContainer: false,
    variantClasses: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
      },
    },
  },

  // ───────────────────────────────────────────
  // Divider
  // ───────────────────────────────────────────
  {
    name: 'Divider',
    importPath: 'divider',
    description: 'Horizontal or vertical divider line.',
    variants: [
      { name: 'orientation', values: ['horizontal', 'vertical'], defaultValue: 'horizontal' },
    ],
    defaultProps: { orientation: 'horizontal' },
    subParts: [],
    baseClasses: 'bg-border',
    isContainer: false,
    variantClasses: {
      orientation: {
        horizontal: 'h-px w-full',
        vertical:   'w-px h-full',
      },
    },
  },

  // ───────────────────────────────────────────
  // Progress
  // ───────────────────────────────────────────
  {
    name: 'Progress',
    importPath: 'progress',
    description: 'Progress bar indicator.',
    variants: [
      { name: 'size', values: ['xs', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md', value: 50 },
    subParts: [{ name: 'ProgressFilledTrack', description: 'Filled portion of progress bar' }],
    baseClasses: 'rounded-full bg-secondary overflow-hidden w-full flex-row items-center',
    isContainer: true,
    variantClasses: {
      size: {
        xs: 'h-1', sm: 'h-2', md: 'h-3', lg: 'h-4', xl: 'h-5',
      },
    },
    subPartClasses: {
      ProgressFilledTrack: 'bg-primary rounded-full h-full w-1/2',
    },
  },

  // ───────────────────────────────────────────
  // Slider
  // ───────────────────────────────────────────
  {
    name: 'Slider',
    importPath: 'slider',
    description: 'Range slider input.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
      { name: 'orientation', values: ['horizontal', 'vertical'], defaultValue: 'horizontal' },
    ],
    defaultProps: { size: 'md', orientation: 'horizontal' },
    subParts: [
      { name: 'SliderTrack', description: 'Slider track' },
      { name: 'SliderFilledTrack', description: 'Filled portion of track' },
      { name: 'SliderThumb', description: 'Draggable thumb' },
    ],
    baseClasses: 'justify-center items-center flex-row',
    isContainer: true,
    variantClasses: {
      size: {
        sm: 'h-4',
        md: 'h-5',
        lg: 'h-6',
      },
      orientation: {
        horizontal: 'w-full',
        vertical:   'h-full',
      },
    },
    subPartClasses: {
      SliderTrack:       'bg-muted rounded-full h-1.5 w-full flex-row items-center',
      SliderFilledTrack: 'bg-primary rounded-full h-1.5',
      SliderThumb:       'bg-background border border-primary rounded-full h-4 w-4',
    },
  },

  // ───────────────────────────────────────────
  // Select
  // ───────────────────────────────────────────
  {
    name: 'Select',
    importPath: 'select',
    description: 'Dropdown select input.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg', 'xl'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'SelectTrigger', description: 'Select trigger button' },
      { name: 'SelectInput', description: 'Display text of selected value' },
    ],
    baseClasses: 'flex-col gap-1',
    isContainer: true,
    variantClasses: {
      size: { sm: 'text-xs', md: 'text-sm', lg: 'text-base', xl: 'text-lg' },
    },
    subPartClasses: {
      SelectTrigger: 'h-9 flex-row items-center rounded-md border border-border bg-background px-3 gap-2',
      SelectInput:   'text-sm text-foreground',
    },
  },

  // ───────────────────────────────────────────
  // Modal
  // ───────────────────────────────────────────
  {
    name: 'Modal',
    importPath: 'modal',
    description: 'Overlay modal dialog.',
    variants: [
      { name: 'size', values: ['xs', 'sm', 'md', 'lg', 'full'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'ModalHeader', description: 'Modal header' },
      { name: 'ModalBody', description: 'Modal body content' },
      { name: 'ModalFooter', description: 'Modal footer actions' },
    ],
    baseClasses: 'rounded-xl bg-card border border-border flex-col',
    isContainer: true,
    variantClasses: {
      size: {
        xs: 'p-4', sm: 'p-5', md: 'p-6', lg: 'p-8', full: 'p-6',
      },
    },
    subPartClasses: {
      ModalHeader: 'flex-row items-center justify-between pb-4 border-b border-border',
      ModalBody:   'py-4',
      ModalFooter: 'flex-row items-center justify-end gap-2 pt-4 border-t border-border',
    },
  },

  // ───────────────────────────────────────────
  // Toast
  // ───────────────────────────────────────────
  {
    name: 'Toast',
    importPath: 'toast',
    description: 'Notification toast message.',
    variants: [
      { name: 'variant', values: ['solid', 'outline'], defaultValue: 'solid' },
      { name: 'action', values: ['error', 'warning', 'success', 'info', 'muted'], defaultValue: 'muted' },
    ],
    defaultProps: { variant: 'solid', action: 'muted' },
    subParts: [
      { name: 'ToastTitle', description: 'Toast title text' },
      { name: 'ToastDescription', description: 'Toast description text' },
    ],
    baseClasses: 'rounded-lg p-4 gap-1 flex-col',
    isContainer: true,
    variantClasses: {
      variant: {
        solid:   'bg-foreground text-background',
        outline: 'border border-border bg-background text-foreground',
      },
      action: {
        error:   'border-destructive',
        warning: 'border-border',
        success: 'border-border',
        info:    'border-border',
        muted:   'border-border',
      },
    },
    subPartClasses: {
      ToastTitle:       'text-sm font-semibold',
      ToastDescription: 'text-sm font-normal',
    },
  },

  // ───────────────────────────────────────────
  // Tabs
  // ───────────────────────────────────────────
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
    baseClasses: 'flex-col gap-2',
    isContainer: true,
    subPartClasses: {
      TabsList:    'flex-row items-center gap-1 rounded-lg bg-muted p-1',
      TabsTrigger: 'flex-row items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground',
      TabsContent: 'pt-2',
    },
  },

  // ───────────────────────────────────────────
  // Accordion
  // ───────────────────────────────────────────
  {
    name: 'Accordion',
    importPath: 'accordion',
    description: 'Collapsible accordion sections.',
    variants: [
      { name: 'variant', values: ['unfilled', 'filled'], defaultValue: 'unfilled' },
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { variant: 'unfilled', size: 'md' },
    subParts: [
      { name: 'AccordionTrigger', description: 'Clickable trigger for section' },
      { name: 'AccordionContent', description: 'Collapsible content' },
    ],
    baseClasses: 'flex-col border-b border-border',
    isContainer: true,
    variantClasses: {
      variant: {
        unfilled: 'bg-transparent',
        filled:   'bg-muted rounded-lg border-0',
      },
      size: {
        sm: 'py-2 px-3 text-sm',
        md: 'py-4 px-4 text-base',
        lg: 'py-5 px-5 text-lg',
      },
    },
    subPartClasses: {
      AccordionTrigger: 'flex-row items-center justify-between py-4 font-medium text-foreground text-base',
      AccordionContent: 'pt-0 pb-4 text-sm text-muted-foreground',
    },
  },

  // ───────────────────────────────────────────
  // FormControl
  // ───────────────────────────────────────────
  {
    name: 'FormControl',
    importPath: 'form-control',
    description: 'Wraps form fields with label and helper text.',
    variants: [
      { name: 'size', values: ['sm', 'md', 'lg'], defaultValue: 'md' },
    ],
    defaultProps: { size: 'md' },
    subParts: [
      { name: 'FormControlLabel', description: 'Label for form field' },
      { name: 'FormControlHelperText', description: 'Helper text' },
      { name: 'FormControlErrorText', description: 'Error message text' },
    ],
    baseClasses: 'flex-col gap-1.5',
    isContainer: true,
    variantClasses: {
      size: { sm: 'text-xs', md: 'text-sm', lg: 'text-base' },
    },
    subPartClasses: {
      FormControlLabel:      'text-sm font-medium text-foreground',
      FormControlHelperText: 'text-xs text-muted-foreground',
      FormControlErrorText:  'text-xs text-destructive',
    },
  },

  // ───────────────────────────────────────────
  // Skeleton
  // ───────────────────────────────────────────
  {
    name: 'Skeleton',
    importPath: 'skeleton',
    description: 'Loading skeleton placeholder.',
    variants: [
      { name: 'variant', values: ['sharp', 'rounded', 'circular'], defaultValue: 'rounded' },
    ],
    defaultProps: { variant: 'rounded' },
    subParts: [],
    baseClasses: 'bg-muted w-full h-4',
    isContainer: false,
    variantClasses: {
      variant: {
        sharp:    'rounded-none',
        rounded:  'rounded-md',
        circular: 'rounded-full',
      },
    },
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────

export function getComponentByName(name: string): RegistryEntry | undefined {
  return COMPONENT_REGISTRY.find((c) => c.name.toLowerCase() === name.toLowerCase());
}

export function getComponentNames(): string[] {
  return COMPONENT_REGISTRY.map((c) => c.name);
}

export function getVariantCombinations(
  entry: RegistryEntry,
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
