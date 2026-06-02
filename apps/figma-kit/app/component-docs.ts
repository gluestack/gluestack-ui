

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
  "Accordion": {
    name: "Accordion",
    description: "Explore gluestack's Accordion component for Expo, next.js, React & React Native. Build sleek, interactive accordions with ease.",
    bestPractices: [],
    properties:
    [
      { name: "type", type: "\"single\" | \"multiple\"", options: ["single","multiple"], description: "Determines whether one or multiple items can be opened at the same time." },
      { name: "isCollapsible", type: "boolean", options: [], description: "When type is \"single\" or \"multiple\", allows closing content when clicking trigger for an open item." },
      { name: "defaultValue", type: "string[]", options: [], description: "The value of the item to expand when initially rendered when type is \"single\" or \"multiple\"." },
      { name: "value", type: "string[]", options: [], description: "The controlled value of the item to expand when type is \"single\" or \"multiple\"." },
      { name: "onValueChange", type: "function", options: [], description: "Event handler called when the expanded state of an item changes and type is \"single\" or \"multiple\"." },
      { name: "isDisabled", type: "boolean", options: [], description: "When true, prevents the user from interacting with the accordion and all its items." },
      { name: "value", type: "string", options: [], description: "The controlled value of the item to expand when type is \"single\" or \"multiple\". Must be used in conjunction with onValueChange. This is a mandatory prop." },
      { name: "isDisabled", type: "boolean", options: [], description: "When true, prevents the user from interacting with the accordion and all its items." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/accordion",
  },

  "Actionsheet": {
    name: "Actionsheet",
    description: "Discover the ActionSheet component for Expo, React & React Native. Easily create intuitive action sheets in your app with gluestack-ui. Learn more in our detailed documentation!",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "Whether the actionsheet is open." },
      { name: "onClose", type: "() => void", options: [], description: "Callback function when the actionsheet is closed." },
      { name: "snapPoints", type: "number[]", options: [], description: "Array of numbers representing the snap points in percentage." },
      { name: "initialFocusRef", type: "React.RefObject<any>", options: [], description: "Ref for the element that should be focused when the actionsheet opens." },
      { name: "finalFocusRef", type: "React.RefObject<any>", options: [], description: "Ref for the element that should be focused when the actionsheet closes." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/actionsheet",
  },

  "Alert": {
    name: "Alert",
    description: "gluestack-ui offers a responsive React Native Alert component with multiple styles. Easily integrate alerts into your UI with customizable React Native alert styles.",
    bestPractices: [],
    properties:
    [
      { name: "action", type: "error | warning | success | info | muted", options: [], description: "Determines the color scheme of the alert." },
      { name: "variant", type: "solid | outline", options: [], description: "Determines the visual style of the alert." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/alert",
  },

  "AlertDialog": {
    name: "AlertDialog",
    description: "Build seamless React Native dialogs with the AlertDialog component. Enhance user engagement with smooth and responsive modal prompts.",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "If true, the alert-dialog will open. Useful for controllable state behavior." },
      { name: "onClose", type: "() => any", options: [], description: "Callback invoked when the alert-dialog is closed." },
      { name: "useRNModal", type: "boolean", options: [], description: "If true, renders react-native native modal. (Only works in react-native)" },
      { name: "defaultIsOpen", type: "boolean", options: [], description: "Specifies the default open state of the AlertDialog" },
      { name: "initialFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the alert-dialog opens." },
      { name: "finalFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the alert-dialog closes." },
      { name: "avoidKeyboard", type: "boolean", options: [], description: "If true, the AlertDialog will avoid the keyboard." },
      { name: "closeOnOverlayClick", type: "boolean", options: [], description: "If true, the AlertDialog will close when the overlay is clicked." },
      { name: "isKeyboardDismissable", type: "boolean", options: [], description: "If true, the keyboard can dismiss the AlertDialog" },
      { name: "size", type: "xs | sm | md | lg | full", options: [], description: "md" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/alert-dialog",
  },

  "AllComponents": {
    name: "AllComponents",
    description: "30+ responsive components for every screen and style",
    bestPractices: [],
    properties:
    [],
    gluestackUrl: "https://gluestack.io/ui/docs/components/allcomponents",
  },

  "Avatar": {
    name: "Avatar",
    description: "Enhance your UI with our React Native Avatar component. Explore gluestack's-ui Avatar for seamless design and customization. Check out the docs to add an Avatar component to your app!",
    bestPractices: [],
    properties:
    [
      { name: "size", type: "xs | sm | md | lg | xl | 2xl", options: [], description: "Determines the size of the avatar." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/avatar",
  },

  "Badge": {
    name: "Badge",
    description: "Display status indicators with the Badge component. Perfect for notifications, labels, and status tags in your React Native app.",
    bestPractices: [],
    properties:
    [
      { name: "action", type: "error | warning | success | info | muted", options: [], description: "Determines the color scheme of the badge." },
      { name: "variant", type: "solid | outline", options: [], description: "Determines the visual style of the badge." },
      { name: "size", type: "sm | md | lg", options: [], description: "Determines the size of the badge." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/badge",
  },

  "BottomSheet": {
    name: "BottomSheet",
    description: "Implement a dynamic bottom sheet in React & React Native with gluestack's bottomsheet component. Learn how to integrate and customize the Bottom Sheet in React Native.",
    bestPractices: [],
    properties:
    [
      { name: "snapToIndex", type: "number", options: [], description: "{index of snapPoints at which bottomsheet initially opens.}" },
      { name: "onOpen", type: "() => void", options: [], description: "{callback function which trigger when bottomsheet is opened.}" },
      { name: "onClose", type: "() => void", options: [], description: "{callback function which trigger when bottomsheet is closed.}" },
      { name: "snapPoints", type: "{Array}", options: [], description: "{Points for the bottom sheet to snap to. It accepts array of number, string or mix. String values should be a percentage.}" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/bottomsheet",
  },

  "Box": {
    name: "Box",
    description: "Use gluestack-ui Box, a powerful box component for flexible layouts. Customize styles, props, and structure easily for web and native platforms.",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/box",
  },

  "Button": {
    name: "Button",
    description: "Discover a powerful button component for React & React Native with customizable size, shape, color, and behavior. Perfect for UI design & seamless user interactions.",
    bestPractices: [],
    properties:
    [
      { name: "isHovered", type: "bool", options: [], description: "To manually set hover to the button." },
      { name: "isPressed", type: "bool", options: [], description: "To manually set pressable state to the button." },
      { name: "isFocused", type: "bool", options: [], description: "To manually set focused state to the button." },
      { name: "isDisabled", type: "bool", options: [], description: "To manually set disable to the button." },
      { name: "flexDirection", type: "'row' | 'column' | 'row-reverse' | 'column-reverse'", options: ["row","column","row-reverse","column-reverse"], description: "Set the direction of Button group to vertical or horizontal" },
      { name: "isDisabled", type: "bool", options: [], description: "When true, this will disable all the buttons in a ButtonGroup." },
      { name: "isAttached", type: "bool", options: [], description: "When attached, all buttons will be attached to each other." },
      { name: "reversed", type: "bool", options: [], description: "To reverse the order of components." },
      { name: "space", type: "string", options: [], description: "It sets the space between different buttons." },
      { name: "action", type: "primary | secondary | positive | negative | default", options: [], description: "primary" },
      { name: "variant", type: "link | outline | solid", options: [], description: "solid" },
      { name: "size", type: "xs | sm | md | lg | xl", options: [], description: "md" },
      { name: "hover", type: "data-hover", options: [], description: "true | false" },
      { name: "active", type: "data-active", options: [], description: "true | false" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focusVisible", type: "data-focus-visible", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/button",
  },

  "Card": {
    name: "Card",
    description: "Build beautiful interfaces with the gluestack-ui Card component. This React Native card offers a clean, modern design for any project. Perfect for seamless card design UI integration.",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "size", type: "sm | md | lg", options: [], description: "md" },
      { name: "variant", type: "elevated | outline | ghost | filled", options: [], description: "elevated" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/card",
  },

  "Center": {
    name: "Center",
    description: "gluestack-ui Center component helps center-align text and content in React Native. Perfect for creating responsive layouts with React Native text center support.",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/center",
  },

  "Checkbox": {
    name: "Checkbox",
    description: "Build interactive forms with a checkbox component for React & React Native. Features include hover, focus, disabled states, and multiple checkbox selection.",
    bestPractices: [],
    properties:
    [
      { name: "value", type: "string", options: [], description: "The value to be used in the checkbox input. This is the value that will be returned on form submission." },
      { name: "onChange", type: "(value: boolean) => void", options: [], description: "Function called when the state of the checkbox changes." },
      { name: "defaultIsChecked", type: "bool", options: [], description: "If true, the checkbox will be initially checked." },
      { name: "isChecked", type: "bool", options: [], description: "When true, the checkbox will be checked. You'll need to pass onChange to update it's value (since it's now controlled)." },
      { name: "isDisabled", type: "bool", options: [], description: "To manually set disable to the checkbox." },
      { name: "isInvalid", type: "bool", options: [], description: "To manually set invalid to the checkbox." },
      { name: "isReadOnly", type: "bool", options: [], description: "To manually set read-only to the checkbox." },
      { name: "isHovered", type: "bool", options: [], description: "To manually set hover to the checkbox." },
      { name: "isFocusVisible", type: "bool", options: [], description: "To manually set focus visible state to the checkbox." },
      { name: "isIndeterminate", type: "bool", options: [], description: "To manually set indeterminate to the checkbox." },
      { name: "forceMount", type: "boolean", options: [], description: "Forces mounting when more control is needed, useful for animations with React libraries." },
      { name: "value", type: "string[]", options: [], description: "The value of the checkbox group." },
      { name: "onChange", type: "{(values: Array) => void}", options: [], description: "The callback fired when any children Checkbox is checked or unchecked." },
      { name: "isDisabled", type: "bool", options: [], description: "To manually set disable to the checkbox." },
      { name: "isInvalid", type: "bool", options: [], description: "To manually set invalid to the checkbox." },
      { name: "isReadOnly", type: "bool", options: [], description: "To manually set read-only to the checkbox." },
      { name: "size", type: "lg | md | sm", options: [], description: "md" },
      { name: "hover", type: "data-hover", options: [], description: "true | false" },
      { name: "active", type: "data-active", options: [], description: "true | false" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focusVisible", type: "data-focus-visible", options: [], description: "true | false" },
      { name: "invalid", type: "data-invalid", options: [], description: "true | false" },
      { name: "checked", type: "data-checked", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/checkbox",
  },

  "Divider": {
    name: "Divider",
    description: "gluestack-ui's Divider component ensures a well-structured interface. Use the Divider component for clean content separation in your design with flexible orientation options.",
    bestPractices: [],
    properties:
    [
      { name: "orientation", type: "vertical | horizontal", options: [], description: "horizontal" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/divider",
  },

  "Drawer": {
    name: "Drawer",
    description: "Implement a responsive Drawer component in React & React Native for navigation and content display. Learn how to install, customize, and integrate it into your project.",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "If true, the drawer will open. Useful for controllable state behavior." },
      { name: "onClose", type: "() => any", options: [], description: "Callback invoked when the drawer is closed." },
      { name: "defaultIsOpen", type: "boolean", options: [], description: "Specifies the default open state of the Drawer" },
      { name: "initialFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the drawer opens." },
      { name: "finalFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the drawer closes" },
      { name: "avoidKeyboard", type: "boolean", options: [], description: "If true, the Drawer will avoid the keyboard." },
      { name: "closeOnOverlayClick", type: "boolean", options: [], description: "If true, the Drawer will close when the overlay is clicked." },
      { name: "isKeyboardDismissable", type: "boolean", options: [], description: "If true, the keyboard can dismiss the Drawer" },
      { name: "children", type: "any", options: [], description: "The content to display inside the Drawer" },
      { name: "focusable", type: "boolean", options: [], description: "If true, Drawer Content will be focusable." },
      { name: "size", type: "xs | sm | md | lg | full", options: [], description: "sm" },
      { name: "anchor", type: "left | right | top | bottom", options: [], description: "left" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/drawer",
  },

  "Fab": {
    name: "Fab",
    description: "Improve your React Native app with the FAB component. Learn how to implement a React Native FAB button using gluestack-ui for a smooth UI experience.",
    bestPractices: [],
    properties:
    [
      { name: "placement", type: "\"top left\" | \"top right\" | \"bottom left\" | \"bottom right\" | \"top center\" | \"bottom center\"", options: ["top left","top right","bottom left","bottom right","top center","bottom center"], description: "Placement of the Fab" },
      { name: "isHovered", type: "bool", options: [], description: "To manually set hover to the fab." },
      { name: "isPressed", type: "bool", options: [], description: "To manually set pressable state to the fab." },
      { name: "isFocused", type: "bool", options: [], description: "To manually set focused state to the fab." },
      { name: "isDisabled", type: "bool", options: [], description: "To manually set disable to the fab." },
      { name: "focus", type: "data-focus", options: [], description: "true | false" },
      { name: "focusVisible", type: "data-focus-visible", options: [], description: "true | false" },
      { name: "size", type: "sm | md | lg", options: [], description: "md" },
      { name: "placement", type: "top right | top left | bottom right | bottom left | top center | bottom center", options: [], description: "bottom right" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/fab",
  },

  "FormControl": {
    name: "FormControl",
    description: "Enhance form usability with FormControl components in React. Manage validation, disabled states, and more. Easy integration for seamless form handling.",
    bestPractices: [],
    properties:
    [
      { name: "isInvalid", type: "boolean", options: [], description: "When true, invalid state." },
      { name: "isRequired", type: "boolean", options: [], description: "If true, astrick gets activated." },
      { name: "isDisabled", type: "boolean", options: [], description: "Disabled state true." },
      { name: "isReadOnly", type: "boolean", options: [], description: "To manually set read-only state." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/form-control",
  },

  "Grid": {
    name: "Grid",
    description: "Discover a powerful Grid component for React & React Native with customizable layout and behavior. Perfect for creating responsive grid layouts in your UI design.",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "_extra", type: "object", options: [], description: "{Accepts grid-cols-* className. Value for * can range from 1 to 12. Default value is grid-cols-12.}" },
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "_extra", type: "object", options: [], description: "{Accepts col-span-* className. Value for * can range from 1 to 12. Default value is col-span-1.}" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/grid",
  },

  "Heading": {
    name: "Heading",
    description: "Explore the gluestack-ui Heading Component with installation steps, API reference, and usage examples. Customize React Native headings with different sizes and styles easily for your projects.",
    bestPractices: [],
    properties:
    [
      { name: "5xl, 4xl, 3xl", type: "{}", options: [], description: "H1" },
      { name: "2xl", type: "{}", options: [], description: "H2" },
      { name: "xl", type: "{}", options: [], description: "H3" },
      { name: "lg", type: "{}", options: [], description: "H4" },
      { name: "md", type: "{}", options: [], description: "H5" },
      { name: "sm, xs", type: "{}", options: [], description: "H6" },
      { name: "isTruncated", type: "true | false", options: [], description: "false" },
      { name: "bold", type: "true | false", options: [], description: "false" },
      { name: "underline", type: "true | false", options: [], description: "false" },
      { name: "strikeThrough", type: "true | false", options: [], description: "false" },
      { name: "sub", type: "true | false", options: [], description: "false" },
      { name: "italic", type: "true | false", options: [], description: "false" },
      { name: "highlight", type: "true | false", options: [], description: "false" },
      { name: "size", type: "5xl | 4xl | 3xl | 2xl | xl | lg | md | sm | xs", options: [], description: "md" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/heading",
  },

  "HStack": {
    name: "HStack",
    description: "Use the gluestack-ui HStack component in React Native to align elements horizontally. Easily customize layouts with spacing and reverse props. Learn how to install and use HStack today!",
    bestPractices: [],
    properties:
    [
      { name: "space", type: "string", options: [], description: "It sets the space between children. By default there is no space between the HStack items." },
      { name: "reversed", type: "boolean", options: [], description: "When true, it places the HStack items in reverse direction." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/hstack",
  },

  "Icon": {
    name: "Icon",
    description: "Use gluestack-ui Icon component to enhance your web and mobile app with scalable component icons. A must-have React Native icon library for modern development!",
    bestPractices: [],
    properties:
    [
      { name: "size", type: "2xs | xs | sm | md | lg | xl", options: [], description: "The size of the icon." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/icon",
  },

  "Image": {
    name: "Image",
    description: "Enhance your app with the Image component from gluestack-ui. Build seamless UI component images in React & React Native with ease. Explore the docs now!",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "source", type: "ImageSourcePropType", options: [], description: "The source of the image" },
      { name: "alt", type: "string", options: [], description: "The alt text for the image" },
      { name: "size", type: "2xs | xs | sm | md | lg | xl | 2xl | full", options: [], description: "The size of the image" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/image",
  },

  "Input": {
    name: "Input",
    description: "A feature-rich React Native Input component – supports icons, validation, and styling options for seamless user input in your mobile app.",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "isInvalid", type: "boolean", options: [], description: "When true, the input displays an error state" },
      { name: "isDisabled", type: "boolean", options: [], description: "When true, the input is disabled and cannot be edited" },
      { name: "isHovered", type: "boolean", options: [], description: "When true, the input displays a hover state" },
      { name: "isFocused", type: "boolean", options: [], description: "When true, the input displays a focus state" },
      { name: "isRequired", type: "boolean", options: [], description: "If true, sets aria-required=\"true\" on the input" },
      { name: "isReadOnly", type: "boolean", options: [], description: "If true, the input value cannot be edited" },
      { name: "size", type: "xl | lg | md | sm", options: [], description: "The size of the input" },
      { name: "variant", type: "underlined | outline | rounded", options: [], description: "The variant of the input" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/input",
  },

  "Link": {
    name: "Link",
    description: "Enhance navigation with a React Native link component. Seamless UI link design for intuitive user experiences. Learn more!",
    bestPractices: [],
    properties:
    [
      { name: "Web", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "href", type: "string", options: [], description: "URL that should be opened on Link press" },
      { name: "onPress", type: "(event?: GestureResponderEvent) => any", options: [], description: "Callback that will be invoked on Link press" },
      { name: "isExternal", type: "boolean", options: [], description: "If true, link will be opened in new tab on web" },
      { name: "isHovered", type: "boolean", options: [], description: "When true, the link displays a hover state" },
      { name: "isFocusVisible", type: "boolean", options: [], description: "To manually set focus visible state to the link" },
      { name: "size", type: "xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl", options: [], description: "The size of the link" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/link",
  },

  "Menu": {
    name: "Menu",
    description: "Build a user-friendly interface with gluestack-ui menu component in React & React Native, designed for easy navigation and accessibility.",
    bestPractices: [],
    properties:
    [
      { name: "trigger", type: "{'(_props: any, state: { open: boolean; }) => Element'}", options: ["(_props: any, state: { open: boolean; }) => Element"], description: "Function that returns a React Element. This element will be used as a Trigger for the Menu" },
      { name: "placement", type: "\"bottom\" | \"top\" | \"right\" | \"left\" | \"top left\" | \"top right\" | \"bottom left\" | \"bottom right\" | \"right top\" | \"right bottom\" | \"left top\" | \"left bottom\"", options: ["bottom","top","right","left","top left","top right","bottom left","bottom right","right top","right bottom","left top","left bottom"], description: "Menu placement" },
      { name: "defaultIsOpen", type: "boolean", options: [], description: "If true, the menu will be opened by default" },
      { name: "onOpen", type: "{'() => void'}", options: ["() => void"], description: "This function will be invoked when the menu is opened" },
      { name: "onClose", type: "{'() => void'}", options: ["() => void"], description: "This function will be invoked when menu is closed" },
      { name: "isOpen", type: "boolean", options: [], description: "Whether the menu is opened. Useful for controlling the open state" },
      { name: "offset", type: "number", options: [], description: "The additional offset applied along the main axis" },
      { name: "crossOffset", type: "number", options: [], description: "The additional offset applied along the cross axis" },
      { name: "disabledKeys", type: "string[]", options: [], description: "Item keys in this collection will be disabled" },
      { name: "closeOnSelect", type: "boolean", options: [], description: "Whether menu is closed after option is selected" },
      { name: "selectedKeys", type: "{\"'all' | Iterable\"}", options: ["'all' | Iterable"], description: "The currently selected keys in the collection (controlled)" },
      { name: "selectionMode", type: "{\"'none' | 'single' | 'multiple'\"}", options: ["'none' | 'single' | 'multiple'"], description: "The type of selection that is allowed in the collection" },
      { name: "onSelectionChange", type: "{\"(keys: 'all' | Iterable) => void\"}", options: ["(keys: 'all' | Iterable) => void"], description: "Handler that is called when the selection changes" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/menu",
  },

  "Modal": {
    name: "Modal",
    description: "Create smooth and accessible modals in React & React Native. Implement React modal components for alerts, forms, and notifications with ease. Optimize modal component for better user engagement.",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "If true, the modal will open. Useful for controllable state behavior" },
      { name: "onClose", type: "{'() => any'}", options: ["() => any"], description: "Callback invoked when the modal is closed" },
      { name: "useRNModal", type: "boolean", options: [], description: "If true, renders react-native native modal" },
      { name: "defaultIsOpen", type: "boolean", options: [], description: "Specifies the default open state of the Modal" },
      { name: "initialFocusRef", type: "{'React.RefObject'}", options: ["React.RefObject"], description: "The ref of element to receive focus when the modal opens" },
      { name: "finalFocusRef", type: "{'React.RefObject'}", options: ["React.RefObject"], description: "The ref of element to receive focus when the modal closes" },
      { name: "avoidKeyboard", type: "boolean", options: [], description: "If true, the Modal will avoid the keyboard" },
      { name: "closeOnOverlayClick", type: "boolean", options: [], description: "If true, the Modal will close when the overlay is clicked" },
      { name: "isKeyboardDismissable", type: "boolean", options: [], description: "If true, the keyboard can dismiss the Modal" },
      { name: "children", type: "any", options: [], description: "The content to display inside the Modal" },
      { name: "focusable", type: "boolean", options: [], description: "If true, Modal Content will be focusable" },
      { name: "size", type: "xs | sm | md | lg | full", options: [], description: "md" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/modal",
  },

  "Popover": {
    name: "Popover",
    description: "Improve user experience with a React Popover component—perfect for contextual modals, tooltips & interactive UI elements. Works seamlessly in React & React Native!",
    bestPractices: [],
    properties:
    [
      { name: "defaultIsOpen", type: "boolean", options: [], description: "Specifies the default open state of the popover." },
      { name: "isOpen", type: "boolean", options: [], description: "If true, the popover will open. Useful for controllable state behavior." },
      { name: "trapFocus", type: "boolean", options: [], description: "Whether popover should trap focus." },
      { name: "focusScope", type: "boolean", options: [], description: "Whether focus should be outside of popover or not" },
      { name: "shouldFlip", type: "boolean", options: [], description: "Whether the element should flip its orientation when there is insufficient room." },
      { name: "initialFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the popover opens." },
      { name: "finalFocusRef", type: "{React.RefObject}", options: [], description: "The ref of element to receive focus when the popover closes" },
      { name: "trigger", type: "{() => any}", options: [], description: "Function that returns a React Element. This element will be used as a Trigger for the popover." },
      { name: "crossOffset", type: "number", options: [], description: "The additional offset applied along the cross axis between the element and its trigger element." },
      { name: "offset", type: "number", options: [], description: "The additional offset applied along the main axis between the element and its trigger element." },
      { name: "shouldOverlapWithTrigger", type: "boolean", options: [], description: "Determines whether popover content should overlap with the trigger." },
      { name: "isKeyboardDismissable", type: "boolean", options: [], description: "If true, the keyboard can dismiss the popover." },
      { name: "placement", type: "'top' | 'top left' | 'top right' | 'bottom' | 'bottom left' | 'bottom right' | 'right' | 'right top' | 'right bottom' | 'left' | 'left top' | 'left bottom'", options: ["top","top left","top right","bottom","bottom left","bottom right","right","right top","right bottom","left","left top","left bottom"], description: "Popover placement" },
      { name: "useRNModal", type: "boolean", options: [], description: "If true, renders react-native native modal." },
      { name: "avoidKeyboard", type: "boolean", options: [], description: "If true, the popover will avoid the keyboard." },
      { name: "onOpen", type: "() => any", options: [], description: "This function will be invoked when popover is opened." },
      { name: "onClose", type: "() => any", options: [], description: "This function will be invoked when popover is closed." },
      { name: "children", type: "any", options: [], description: "The content to display inside the popover." },
      { name: "size", type: "xs | sm | md | lg | full", options: [], description: "md" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/popover",
  },

  "Portal": {
    name: "Portal",
    description: "Learn how to use the Portal component in React and React Native to render content outside the DOM hierarchy. Explore installation, API reference, and props.",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "If true, the portal will open." },
      { name: "isKeyboardDismissable", type: "boolean", options: [], description: "If true, the keyboard can dismiss the portal." },
      { name: "useRNModal", type: "boolean", options: [], description: "If true, renders react-native native modal." },
      { name: "useRNModalOnAndroid", type: "boolean", options: [], description: "If true, renders react-native native modal only in android." },
      { name: "onRequestClose", type: "{((event: NativeSyntheticEvent) => void) | undefined}", options: [], description: "Callback is called when the user taps the hardware back button on Android or the menu button on Apple TV. This is required on Apple TV and Android. Only applicable when useRNModal is true." },
      { name: "animationPreset", type: "\"fade\" | \"slide\" | \"none\"", options: ["fade","slide","none"], description: "The animation preset for the portal." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/portal",
  },

  "Pressable": {
    name: "Pressable",
    description: "Simplify interactive UI with the Pressable component in React Native. Manage hover, pressed, and focus events efficiently. Install now and improve your mobile app responsiveness!",
    bestPractices: [],
    properties:
    [
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focusVisible", type: "data-focus-visible", options: [], description: "true | false" },
      { name: "active", type: "data-active", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/pressable",
  },

  "Progress": {
    name: "Progress",
    description: "Enhance your app with a responsive Progress component. gluestack-ui offers a React Native progress bar for tracking steps, ensuring a smooth progress bar UI experience.",
    bestPractices: [],
    properties:
    [
      { name: "value", type: "number", options: [], description: "It is used to set the progress of the progress bar" },
      { name: "size", type: "xs | sm | md | lg | xl | 2xl", options: [], description: "md" },
      { name: "orientation", type: "vertical | horizontal", options: [], description: "horizontal" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/progress",
  },

  "Radio": {
    name: "Radio",
    description: "Enhance your UI with a React Native radio button. Easily integrate radio buttons component with full accessibility support.",
    bestPractices: [],
    properties:
    [
      { name: "value", type: "string", options: [], description: "{The value to be used in the radio input. This is the value that will be returned on form submission.}" },
      { name: "onChange", type: "function", options: [], description: "{Function called when the state of the radio changes.}" },
      { name: "isDisabled", type: "bool", options: [], description: "{To manually set disable to the radio.}" },
      { name: "isInvalid", type: "bool", options: [], description: "{To manually set invalid to the radio.}" },
      { name: "isHovered", type: "bool", options: [], description: "{To manually set hover to the radio.}" },
      { name: "isFocusVisible", type: "bool", options: [], description: "{To manually set focus visible state to the radio.}" },
      { name: "isIndeterminate", type: "bool", options: [], description: "{To manually set indeterminate to the radio.}" },
      { name: "forceMount", type: "boolean", options: [], description: "Forces mounting when more control is needed, useful for animations with React libraries." },
      { name: "value", type: "string", options: [], description: "The value of the radio group." },
      { name: "onChange", type: "function", options: [], description: "The callback fired when any children Radio is checked or unchecked." },
      { name: "isReadOnly", type: "bool", options: [], description: "{To manually set read-only to the radio group.}" },
      { name: "hover", type: "data-hover", options: [], description: "true | false" },
      { name: "active", type: "data-active", options: [], description: "true | false" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focusVisible", type: "data-focus-visible", options: [], description: "true | false" },
      { name: "invalid", type: "data-invalid", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/radio",
  },

  "Select": {
    name: "Select",
    description: "Enhance your React Native app with a customizable Select dropdown component. Supports accessibility, animations, and flexible styling for a smooth user experience.",
    bestPractices: [],
    properties:
    [
      { name: "isDisabled", type: "boolean", options: [], description: "{When true, the select is disabled and cannot be edited.}" },
      { name: "isInvalid", type: "boolean", options: [], description: "{When true, the select displays an error state.}" },
      { name: "isRequired", type: "boolean", options: [], description: "{When true, sets aria-required=\"true\" on the input.}" },
      { name: "isHovered", type: "boolean", options: [], description: "{When true, the select displays a hover state.}" },
      { name: "isFocusVisible", type: "boolean", options: [], description: "{When true, the focus ring of select will be visible.}" },
      { name: "isFocused", type: "boolean", options: [], description: "{When true, the select displays a focus state.}" },
      { name: "closeOnOverlayClick", type: "boolean", options: [], description: "{When true, the select will close when the overlay is clicked.}" },
      { name: "selectedValue", type: "string", options: [], description: "{Sets the currently selected option value, allowing the component to render with the corresponding option pre-selected.}" },
      { name: "initialLabel", type: "string", options: [], description: "{Sets the initial selected Label for a select component.}" },
      { name: "defaultValue", type: "string", options: [], description: "{Sets the initial selected option value for a select component.}" },
      { name: "onOpen", type: "{() => any}", options: [], description: "{Callback to be invoked when Select Dropdown or Actionsheet is opened.}" },
      { name: "onValueChange", type: "{() => any}", options: [], description: "{Callback to be invoked when Select value is changed.}" },
      { name: "onClose", type: "{() => any}", options: [], description: "{Callback to be invoked when Select Dropdown or Actionsheet is closed.}" },
      { name: "isDisabled", type: "bool", options: [], description: "{When true, its disabled state activates.}" },
      { name: "label", type: "string", options: [], description: "{setting label that displays to the user.}" },
      { name: "value", type: "string", options: [], description: "{The value to be used for the item. This is the value that will be returned on form submission.}" },
      { name: "textStyle", type: "inherits all the properties of react native text", options: [], description: "{This prop only works on native.}" },
      { name: "size", type: "sm | md | lg | xl", options: [], description: "md" },
      { name: "variant", type: "underlined | outline | rounded", options: [], description: "outline" },
      { name: "hover", type: "data-hover", options: [], description: "true | false" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focus", type: "data-focus", options: [], description: "true | false" },
      { name: "invalid", type: "data-invalid", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/select",
  },

  "Skeleton": {
    name: "Skeleton",
    description: "Discover the ultimate gluestack-ui Skeleton component for React & React Native. Improve app loading visuals with gluestack-ui easy-to-use Skeleton.",
    bestPractices: [],
    properties:
    [
      { name: "{Web}", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "variant", type: "rounded | sharp | circular", options: [], description: "Shape of the skeleton component" },
      { name: "startColor", type: "string", options: [], description: "Sets the color of the skeleton animation" },
      { name: "isLoaded", type: "bool", options: [], description: "When true, the skeleton content will be displayed" },
      { name: "speed", type: "number", options: [], description: "Sets the animation speed of the skeleton component" },
      { name: "{Web}", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "lines", type: "number", options: [], description: "Number of lines in text skeleton" },
      { name: "startColor", type: "string", options: [], description: "Sets the color of the skeleton animation" },
      { name: "isLoaded", type: "bool", options: [], description: "When true, the skeleton content will be displayed" },
      { name: "speed", type: "number", options: [], description: "Sets the animation speed of the skeleton component" },
      { name: "gap", type: "number", options: [], description: "Sets the gap between the text skeletons" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/skeleton",
  },

  "Slider": {
    name: "Slider",
    description: "Create smooth, interactive controls with the gluestack-ui React Native Slider component. Customize track height, values, and states for a seamless slider UI experience.",
    bestPractices: [],
    properties:
    [
      { name: "onChange", type: "{'(value: number) => void'}", options: ["(value: number) => void"], description: "Function called when the state of the Slider changes." },
      { name: "isDisabled", type: "bool", options: [], description: "When true, this will disable Slider" },
      { name: "isReadOnly", type: "boolean", options: [], description: "To manually set read-only to the checkbox." },
      { name: "sliderTrackHeight", type: "number", options: [], description: "To change the slider track height." },
      { name: "defaultValue", type: "number", options: [], description: "To change the slider value." },
      { name: "minValue", type: "number", options: [], description: "The slider's minimum value" },
      { name: "maxValue", type: "number", options: [], description: "The slider's maximum value." },
      { name: "value", type: "number", options: [], description: "The slider's current value." },
      { name: "step", type: "number", options: [], description: "The slider's step value." },
      { name: "_thumb", type: "Prop to style SliderThumb Component", options: [], description: "" },
      { name: "_track", type: "Prop to style SliderTrack Component", options: [], description: "" },
      { name: "_filledTrack", type: "Prop to style SliderFilledTrack Component", options: [], description: "" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "focus", type: "data-focus", options: [], description: "true | false" },
      { name: "invalid", type: "data-invalid", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/slider",
  },

  "Spinner": {
    name: "Spinner",
    description: "Enhance your UI with the gluestack-ui Spinner component. A React Native spinner with ShadCN styling for smooth loading indicators. Optimize your spinner UI design with ease.",
    bestPractices: [],
    properties:
    [],
    gluestackUrl: "https://gluestack.io/ui/docs/components/spinner",
  },

  "Switch": {
    name: "Switch",
    description: "Enhance your UI with a sleek Switch Component. Built on React Native, it's customizable and accessible. Perfect for toggling options seamlessly.",
    bestPractices: [],
    properties:
    [
      { name: "isDisabled", type: "boolean", options: [], description: "When true, the switch is disabled and cannot be toggled" },
      { name: "isInvalid", type: "boolean", options: [], description: "When true, the switch displays an error state." },
      { name: "isRequired", type: "boolean", options: [], description: "When true, sets aria-required=\"true\" on the switch." },
      { name: "isHovered", type: "boolean", options: [], description: "When true, the switch displays a hover state." },
      { name: "value", type: "boolean", options: [], description: "The value of the switch. If true the switch will be turned on." },
      { name: "defaultValue", type: "boolean", options: [], description: "The defaultValue of the switch. If true the switch will be turned on initially." },
      { name: "onToggle", type: "{() => any}", options: [], description: "Callback to be invoked when switch value is changed." },
      { name: "size", type: "sm | md | lg", options: [], description: "md" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/switch",
  },

  "Table": {
    name: "Table",
    description: "Effortlessly manage tabular data with gluestack-ui Table component. A fully customizable React Native table component for smooth data display in your UI. Perfect for any project!",
    bestPractices: [],
    properties:
    [],
    gluestackUrl: "https://gluestack.io/ui/docs/components/table",
  },

  "Text": {
    name: "Text",
    description: "Enhance your app with gluestack-ui's Text component—an adaptable React Native text area with multiple styles, sizes, and formatting options for seamless UI design.",
    bestPractices: [],
    properties:
    [
      { name: "{Web}", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "isTruncated", type: "true", options: [], description: "false" },
      { name: "bold", type: "true", options: [], description: "false" },
      { name: "underline", type: "true", options: [], description: "false" },
      { name: "strikeThrough", type: "true", options: [], description: "false" },
      { name: "sub", type: "true", options: [], description: "false" },
      { name: "italic", type: "true", options: [], description: "false" },
      { name: "highlight", type: "true", options: [], description: "false" },
      { name: "size", type: "2xs | xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl", options: [], description: "md" },
      { name: "bold", type: "boolean", options: [], description: "Used to make the text bold." },
      { name: "isTruncated", type: "boolean", options: [], description: "If true, it will render an ellipsis when the text exceeds the width of the viewport or maxWidth set." },
      { name: "italic", type: "boolean", options: [], description: "Used to make the text italic." },
      { name: "underline", type: "boolean", options: [], description: "Used underline the text." },
      { name: "strikeThrough", type: "boolean", options: [], description: "A horizontal line through the center of the text." },
      { name: "highlight", type: "boolean", options: [], description: "Used to highlight the text with a yellow background." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/text",
  },

  "Textarea": {
    name: "Textarea",
    description: "Easily integrate a React & React Native Textarea component with multi-line input. Customize size, state, and accessibility for seamless UI.",
    bestPractices: [],
    properties:
    [
      { name: "size", type: "'sm' | 'md' | 'lg' | 'xl'", options: ["sm","md","lg","xl"], description: "Changes the size of the Input Text" },
      { name: "isInvalid", type: "bool", options: [], description: "When true, the input displays an error state." },
      { name: "isDisabled", type: "bool", options: [], description: "When true, the input is disabled and cannot be edited." },
      { name: "isHovered", type: "bool", options: [], description: "When true, the input displays a hover state." },
      { name: "isFocused", type: "bool", options: [], description: "When true, the input displays a focus state." },
      { name: "isRequired", type: "bool", options: [], description: "If true, sets aria-required=\"true\" on the input." },
      { name: "isReadOnly", type: "bool", options: [], description: "If true, the input value cannot be edited." },
      { name: "{_input}", type: "Prop to style TextareaInput Component", options: [], description: "" },
      { name: "size", type: "xl | lg | md | sm", options: [], description: "md" },
      { name: "hover", type: "data-hover", options: [], description: "true | false" },
      { name: "focus", type: "data-focus", options: [], description: "true | false" },
      { name: "disabled", type: "data-disabled", options: [], description: "true | false" },
      { name: "invalid", type: "data-invalid", options: [], description: "true | false" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/textarea",
  },

  "Toast": {
    name: "Toast",
    description: "gluestack-ui Toast component for React Native lets you show toast messages effortlessly. Improve your Toast component with flexible placement, duration, and actions.",
    bestPractices: [],
    properties:
    [
      { name: "duration", type: "number or null", options: [], description: "The delay before the toast hides (in milliseconds). If set to null, toast will never dismiss." },
      { name: "onCloseComplete", type: "()=>{}", options: [], description: "Callback function to run side effects after the toast has closed." },
      { name: "placement", type: "'top'| 'top right' | 'top left' | 'bottom' | 'bottom left' | 'bottom right'", options: ["top","top right","top left","bottom","bottom left","bottom right"], description: "Position of toast on the web page." },
      { name: "render?: (props: any)", type: "ReactNode", options: [], description: "Renders a toast component" },
      { name: "avoidKeyboard", type: "bool", options: [], description: "If true and the keyboard is opened, the Toast will move up equivalent to the keyboard height." },
      { name: "containerStyle", type: "ViewStyle", options: [], description: "Container style object for the toast." },
      { name: "action", type: "error | warning | success | info | attention", options: [], description: "attention" },
      { name: "variant", type: "solid | outline | accent", options: [], description: "solid" }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/toast",
  },

  "Tooltip": {
    name: "Tooltip",
    description: "Create an intuitive UI using the gluestack-ui Tooltip component in React & React Native. Add hints & tooltips seamlessly.",
    bestPractices: [],
    properties:
    [
      { name: "isOpen", type: "boolean", options: [], description: "Whether the tooltip is opened. Useful for controlling the open state." },
      { name: "isDisabled", type: "boolean", options: [], description: "Whether the tooltip is disabled." },
      { name: "defaultIsOpen", type: "boolean", options: [], description: "If true, the popover will be opened by default." },
      { name: "onOpen", type: "() => void", options: [], description: "This function will be invoked when the tooltip is opened." },
      { name: "onClose", type: "() => void", options: [], description: "This function will be invoked when tooltip is closed. It will also be called when the user attempts to close the tooltip via Escape key or backdrop press." },
      { name: "openDelay", type: "number", options: [], description: "Duration in ms to wait till displaying the tooltip." },
      { name: "closeDelay", type: "number", options: [], description: "Duration in ms to wait till hiding the tooltip." },
      { name: "placement", type: "\"bottom\" | \"top\" | \"right\" | \"left\" | \"top left\" | \"top right\" | \"bottom left\" | \"bottom right\" | \"right top\" | \"right bottom\" | \"left top\" | \"left bottom\"", options: ["bottom","top","right","left","top left","top right","bottom left","bottom right","right top","right bottom","left top","left bottom"], description: "Tooltip placement" },
      { name: "children", type: "any", options: [], description: "The content to display inside the tooltip." },
      { name: "closeOnClick", type: "boolean", options: [], description: "Whether tooltip should be closed on Trigger click." },
      { name: "trigger", type: "() => any", options: [], description: "Function that returns a React Element. This element will be used as a Trigger for the tooltip." },
      { name: "offset", type: "number", options: [], description: "Distance between the trigger and the tooltip." },
      { name: "crossOffset", type: "number", options: [], description: "The additional offset applied along the cross axis between the element and its trigger element." },
      { name: "shouldOverlapWithTrigger", type: "boolean", options: [], description: "Determines whether tooltip content should overlap with the trigger." },
      { name: "shouldFlip", type: "boolean", options: [], description: "Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely." },
      { name: "closeOnOverlayClick", type: "boolean", options: [], description: "Closes tooltip when clicked outside." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/tooltip",
  },

  "VStack": {
    name: "VStack",
    description: "Use the gluestack-ui VStack component to arrange elements vertically with customizable spacing. Simplify layout design with VStack React Native for seamless UIs.",
    bestPractices: [],
    properties:
    [
      { name: "{Web}", type: "{}", options: [], description: "" },
      { name: "Native", type: "{}", options: [], description: "" },
      { name: "space", type: "string", options: [], description: "It sets the space between children. By default there is no space between the VStack items." },
      { name: "reversed", type: "boolean", options: [], description: "When true, it places the VStack items in reverse direction." }
    ],
    gluestackUrl: "https://gluestack.io/ui/docs/components/vstack",
  }
};

export default DOCS;
