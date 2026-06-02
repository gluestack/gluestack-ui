/**
 * component-docs.ts
 * -----------------
 * Static documentation data for all root-level Gluestack UI components.
 * Used by the /docs/[component] page route.
 */

export interface PropEntry {
  name: string;
  type: string;
  options: string[];
  description: string;
}

export interface ComponentDoc {
  name: string;
  description: string;
  bestPractices: string[];
  properties: PropEntry[];
  gluestackUrl: string;
}

const DOCS: Record<string, ComponentDoc> = {
  Button: {
    name: "Button",
    description:
      "A pressable UI element that triggers an action. Supports multiple variants, sizes, and states including hover, focus, pressed, and disabled.",
    bestPractices: [
      "Use clear, action-oriented labels (e.g. 'Save', 'Delete') instead of vague ones ('Click here').",
      "Prefer 'solid' variant for primary actions and 'outline' or 'link' for secondary/tertiary.",
      "Always provide a disabled visual state when the action is unavailable to prevent confusion.",
      "Avoid placing more than one primary button in the same view section.",
      "Ensure touch targets are at least 44×44 px for accessibility on mobile.",
    ],
    properties: [
      { name: "variant", type: "enum", options: ["solid", "outline", "link"], description: "Visual style of the button." },
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl"], description: "Controls padding and font size." },
      { name: "action", type: "enum", options: ["primary", "secondary", "positive", "negative", "default"], description: "Semantic color intent." },
      { name: "isDisabled", type: "boolean", options: ["true", "false"], description: "Renders the button in a non-interactive state." },
      { name: "isHovered", type: "boolean", options: ["true", "false"], description: "Forces hover visual state (useful for design tokens preview)." },
      { name: "isPressed", type: "boolean", options: ["true", "false"], description: "Forces pressed/active visual state." },
      { name: "isFocused", type: "boolean", options: ["true", "false"], description: "Forces focused visual state." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/forms/button",
  },

  Avatar: {
    name: "Avatar",
    description:
      "Displays a user's profile image with a fallback to initials when the image fails to load. Supports a badge indicator for online/offline status.",
    bestPractices: [
      "Always provide a fallback text (initials) in case the image URL is unavailable.",
      "Use the badge only to convey real-time status — avoid decorative use.",
      "Keep avatar sizes consistent within the same list or group.",
      "For groups of avatars, use negative margin to create an overlapping stack.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "2xl"], description: "Controls the diameter of the avatar circle." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/media-and-icons/avatar",
  },

  Badge: {
    name: "Badge",
    description:
      "A small label used to highlight status, categories, or counts. Supports solid and outline styles with semantic color actions.",
    bestPractices: [
      "Use semantic actions consistently: 'success' for positive, 'error' for negative, 'warning' for caution, 'info' for informational.",
      "Keep badge text short — ideally 1–2 words or a number.",
      "Avoid stacking multiple badges of the same action on one element.",
      "Pair an icon with text for better scanability in dense UIs.",
    ],
    properties: [
      { name: "variant", type: "enum", options: ["solid", "outline"], description: "Fill style of the badge." },
      { name: "size", type: "enum", options: ["sm", "md", "lg"], description: "Controls text size and padding." },
      { name: "action", type: "enum", options: ["success", "error", "warning", "info", "muted"], description: "Semantic color intent." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/data-display/badge",
  },

  Card: {
    name: "Card",
    description:
      "A surface container that groups related content. Supports multiple visual variants from ghost to elevated.",
    bestPractices: [
      "Use 'elevated' for cards that need strong separation from the background.",
      "Use 'ghost' for lightweight groupings that don't need visual weight.",
      "Maintain consistent card sizes within a grid or list.",
      "Avoid putting more than 3–4 actions inside a single card.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["sm", "md", "lg"], description: "Controls internal padding." },
      { name: "variant", type: "enum", options: ["elevated", "filled", "ghost", "outline"], description: "Visual treatment of the card surface." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/data-display/card",
  },

  Heading: {
    name: "Heading",
    description: "A semantic heading element (h1–h6) with Gluestack typography tokens.",
    bestPractices: [
      "Use a single h1 per page for SEO and accessibility.",
      "Follow a logical heading hierarchy — don't skip levels (h1 → h3).",
      "Use size prop to control visual size independently of semantic level.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], description: "Visual text size." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/typography/heading",
  },

  Input: {
    name: "Input",
    description:
      "A text input field with support for outline, underlined, and rounded variants. Handles disabled, invalid, and read-only states.",
    bestPractices: [
      "Always pair an Input with a visible label — don't rely on placeholder alone.",
      "Show validation errors inline below the field, not in alerts.",
      "Use 'isReadOnly' instead of 'isDisabled' when the user should see but not change the value.",
      "Avoid making inputs wider than their expected content (e.g. a phone number field).",
    ],
    properties: [
      { name: "variant", type: "enum", options: ["outline", "underlined", "rounded"], description: "Border style of the input." },
      { name: "size", type: "enum", options: ["sm", "md", "lg", "xl"], description: "Controls height and font size." },
      { name: "isDisabled", type: "boolean", options: ["true", "false"], description: "Prevents interaction." },
      { name: "isInvalid", type: "boolean", options: ["true", "false"], description: "Applies error styling." },
      { name: "isReadOnly", type: "boolean", options: ["true", "false"], description: "Allows reading but not editing." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/forms/input",
  },

  Checkbox: {
    name: "Checkbox",
    description: "A controlled boolean toggle for forms. Supports invalid and disabled states.",
    bestPractices: [
      "Group related checkboxes vertically for easy scanning.",
      "Always provide a visible label — do not use checkboxes without labels.",
      "Use a CheckboxGroup when multiple checkboxes are related.",
      "Show an indeterminate state when a parent checkbox controls a partial selection.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["sm", "md", "lg"], description: "Controls the checkbox size." },
      { name: "isDisabled", type: "boolean", options: ["true", "false"], description: "Prevents toggling." },
      { name: "isInvalid", type: "boolean", options: ["true", "false"], description: "Applies error styling." },
      { name: "isChecked", type: "boolean", options: ["true", "false"], description: "Controlled checked state." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/forms/checkbox",
  },

  Slider: {
    name: "Slider",
    description: "A range input for selecting a numeric value within a min/max range. Supports horizontal and vertical orientations.",
    bestPractices: [
      "Always show the current value alongside the slider (above the thumb or in a tooltip).",
      "Set meaningful min/max/step values — avoid arbitrary ranges.",
      "Use horizontal sliders for most cases; vertical only for audio/volume controls.",
      "Provide keyboard navigation support (arrow keys increment/decrement).",
    ],
    properties: [
      { name: "size", type: "enum", options: ["sm", "md", "lg"], description: "Controls track thickness and thumb size." },
      { name: "orientation", type: "enum", options: ["horizontal", "vertical"], description: "Direction of the slider track." },
      { name: "isDisabled", type: "boolean", options: ["true", "false"], description: "Prevents value changes." },
      { name: "isReversed", type: "boolean", options: ["true", "false"], description: "Flips the fill direction." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/forms/slider",
  },

  Progress: {
    name: "Progress",
    description: "A visual indicator of task completion. Supports horizontal and vertical orientations with a filled track.",
    bestPractices: [
      "Pair Progress with a text label showing the percentage or step count.",
      "Animate the progress for long-running tasks to convey activity.",
      "Use an indeterminate animation when the total duration is unknown.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "2xl"], description: "Controls track height." },
      { name: "orientation", type: "enum", options: ["horizontal", "vertical"], description: "Direction of the progress bar." },
      { name: "value", type: "number", options: ["0–100"], description: "Current progress percentage." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/feedback/progress",
  },

  Spinner: {
    name: "Spinner",
    description: "An animated loading indicator used for indeterminate loading states.",
    bestPractices: [
      "Use a spinner only for operations that take 1–3 seconds; for longer operations show a Progress bar.",
      "Center the spinner within its container or overlay.",
      "Add an aria-label for screen reader accessibility.",
      "Avoid showing multiple spinners simultaneously on the same screen.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["small", "large"], description: "Controls the spinner diameter." },
      { name: "color", type: "string", options: ["any CSS color"], description: "Color of the spinner indicator." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/feedback/spinner",
  },

  Accordion: {
    name: "Accordion",
    description: "A disclosure component that shows/hides content sections. Supports single or multiple open items.",
    bestPractices: [
      "Use accordions for FAQs, settings sections, or any content that benefits from progressive disclosure.",
      "Provide a visible expand/collapse icon to make the interaction obvious.",
      "Avoid nesting accordions more than one level deep.",
      "For single-item expand only, use type='single' with isCollapsible=true.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["sm", "md", "lg"], description: "Controls padding and font size." },
      { name: "variant", type: "enum", options: ["filled", "unfilled"], description: "Background treatment of items." },
      { name: "type", type: "enum", options: ["single", "multiple"], description: "Whether one or many items can be open simultaneously." },
      { name: "isCollapsible", type: "boolean", options: ["true", "false"], description: "Allows the open item to be collapsed (for type='single')." },
      { name: "isDisabled", type: "boolean", options: ["true", "false"], description: "Disables all items." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/disclosure/accordion",
  },

  Divider: {
    name: "Divider",
    description: "A thin line used to separate content sections horizontally or vertically.",
    bestPractices: [
      "Use dividers sparingly — whitespace is often a better separator.",
      "Prefer vertical dividers inside flex rows and horizontal ones between stacked sections.",
    ],
    properties: [
      { name: "orientation", type: "enum", options: ["horizontal", "vertical"], description: "Direction of the divider line." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/layout/divider",
  },

  Modal: {
    name: "Modal",
    description: "A dialog overlay that captures user focus for critical tasks or confirmations. Renders content in a portal above the page.",
    bestPractices: [
      "Use modals only for critical interruptions — confirmations, alerts, or focused forms.",
      "Always provide a clear close mechanism (X button or Cancel).",
      "Trap keyboard focus inside the modal while it's open.",
      "Avoid stacking modals — use a single modal at a time.",
      "Keep modal content concise; use a drawer for long-form content.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "full"], description: "Width of the modal dialog." },
      { name: "isOpen", type: "boolean", options: ["true", "false"], description: "Controls visibility." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/overlay/modal",
  },

  ModalContent: {
    name: "ModalContent",
    description: "The visible dialog box rendered inside a Modal. Contains ModalHeader, ModalBody, and ModalFooter slots.",
    bestPractices: [
      "Always include a ModalHeader with a descriptive title.",
      "Use ModalFooter for action buttons (confirm/cancel).",
      "Keep the modal body scrollable for longer content.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "full"], description: "Width of the modal dialog." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/overlay/modal",
  },

  Menu: {
    name: "Menu",
    description: "A floating list of actions triggered by a button. Supports icons, labels, and disabled items.",
    bestPractices: [
      "Logical organization: group related menu items together and use separators or headings to improve scanability.",
      "Keyboard navigation: implement full keyboard support including arrow key navigation and type-ahead.",
      "Visual feedback: provide clear hover, focus, and active states on menu items.",
      "Submenus: if using nested menus, ensure they are easy to navigate and don't create usability issues on touch devices.",
      "Responsive design: adapt menu layouts for different screen sizes using a full-screen approach or bottom sheet on mobile.",
      "Accessibility: use appropriate ARIA attributes so screen readers understand the menu structure.",
    ],
    properties: [
      { name: "placement", type: "enum", options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"], description: "Where the menu opens relative to the trigger." },
      { name: "offset", type: "number", options: ["any number (px)"], description: "Gap between the trigger and menu." },
      { name: "disabledKeys", type: "array", options: ["item key strings"], description: "Keys of items that should be non-interactive." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/overlay/menu",
  },

  Popover: {
    name: "Popover",
    description: "A non-modal floating panel anchored to a trigger element. Used for tooltips, contextual help, or compact forms.",
    bestPractices: [
      "Use popovers for contextual information that supplements the page — not for critical actions (use a Modal instead).",
      "Always close the popover when the user clicks outside or presses Escape.",
      "Keep popover content concise — if it needs a scroll, consider a Drawer.",
      "Position the popover to avoid clipping at viewport edges.",
    ],
    properties: [
      { name: "placement", type: "enum", options: ["top", "bottom", "left", "right", "top-start", "top-end", "bottom-start", "bottom-end"], description: "Anchor position relative to the trigger." },
      { name: "size", type: "enum", options: ["xs", "sm", "md", "lg", "xl", "full"], description: "Width of the popover panel." },
      { name: "isOpen", type: "boolean", options: ["true", "false"], description: "Controlled open state." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/overlay/popover",
  },

  Table: {
    name: "Table",
    description: "A structured data display with header, body, and footer sections. Supports row and column spanning.",
    bestPractices: [
      "Always include a TableHeader with column labels — don't rely on data alone.",
      "Right-align numeric columns for easy scanning.",
      "Use TableFooter for aggregate values (totals, averages).",
      "For large datasets, implement pagination rather than showing all rows.",
      "Add aria-label or caption for screen reader accessibility.",
    ],
    properties: [],
    gluestackUrl: "https://gluestack.io/ui/docs/components/data-display/table",
  },

  Grid: {
    name: "Grid",
    description: "A CSS Grid-based layout component with responsive column configuration via the _extra prop.",
    bestPractices: [
      "Use meaningful column spans (e.g. col-span-4 for a 1/3 width on a 12-column grid).",
      "Set a consistent gap for visual rhythm.",
      "Test your grid layout at multiple breakpoints — use responsive col-span classes.",
    ],
    properties: [],
    gluestackUrl: "https://gluestack.io/ui/docs/components/layout/grid",
  },

  ActivityIndicator: {
    name: "ActivityIndicator",
    description: "A native React Native activity indicator (spinning loader). For web, use Spinner instead.",
    bestPractices: [
      "Use for indeterminate loading states in React Native apps.",
      "Center within its container.",
      "Provide an accessibility label.",
    ],
    properties: [
      { name: "size", type: "enum", options: ["small", "large"], description: "Size of the indicator." },
      { name: "color", type: "string", options: ["any CSS color"], description: "Color of the indicator." },
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/feedback/spinner",
  },
};

export default DOCS;
