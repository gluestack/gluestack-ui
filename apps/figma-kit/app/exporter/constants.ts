/**
 * exporter/constants.ts
 * ----------------------
 * Constants for the Figma exporter pipeline.
 * Controls image quality, component filtering rules,
 * and which components must not be rendered in isolation.
 */

export const IMAGE_QUALITY = 0.7;
export const RESOLVE_IMAGES = true;

export const JUNK_COMPONENT_NAMES = new Set([
  "Root", "ServerRoot", "AppRouter", "LocaleProvider", "HotReload",
  "ReactDevOverlay", "ErrorBoundary", "BuildError", "Hydration",
  "PathnameContextProviderAdapter", "SearchParamsContext", "Router",
  "Head", "Script", "StyleRegistry", "ServerInsertedHTMLContext",
  "HistoryUpdater", "ReplaySsrOnlyErrors",
  "Home", "ToastList", "MappedHeading", "ChildPath", "GlobeIcon", "IconMark",
  "View", "Image", "TextInput", "ScrollView", "Pressable",
  "SegmentViewNode", "SegmentTrieNode", "SegmentViewStateNode",
  "ScrollAndMaybeFocusHandler", "InnerScrollAndFocusHandlerOld"
]);

export const JUNK_SUBSTRINGS = [
  "Layout", "InnerLayout", "Page", "InnerPage", "Client",
  "Provider", "Context", "Boundary", "Router", "Root", "Wrapper",
];

// Components extracted from overlay portals that crash when rendered in
// isolation because they need GluestackUIProvider / AnimatePresence context.
export const SKIP_ISOLATED_RENDER = new Set([
  "FocusScope", "AnimatePresence", "MotionComponent", "PresenceChild",
  "Overlay", "OverlayView", "OverlayContainer", "PortalWrapper",
  "AnimatedComponent", "OverlayBackdrop", "ModalBackdrop", "AlertDialogBackdrop",
  "Root", "ServerRoot", "AppRouter", "RootErrorBoundary", "ErrorBoundary",
  "ErrorBoundaryHandler", "Router", "HotReload", "AppDevOverlayErrorBoundary",
  "DevRootHTTPAccessFallbackBoundary", "HTTPAccessFallbackBoundary",
  "HTTPAccessFallbackErrorBoundary", "RedirectBoundary", "RedirectErrorBoundary",
  "Head", "OuterLayoutRouter", "RenderFromTemplateContext", "LoadingBoundary",
  "InnerLayoutRouter", "ClientPageRoot", "SegmentBoundaryTriggerNode",
  "AppRouterAnnouncer",
  // Icon: skip isolated render because it needs concrete icon component refs via `as` prop
  "Icon",
]);

/**
 * Allowlist of true root-level Gluestack UI components.
 * Only these names appear as top-level entries in the Figma export.
 * Sub-components (ButtonText, AvatarBadge, ModalHeader, MenuItem, …)
 * and bare icon exports are excluded — they are still present as
 * *children* inside their parent component's variant tree.
 */
export const ROOT_COMPONENTS = new Set([
  // Primitives
  "Text", "Heading", "Divider", "Spinner", "ActivityIndicator",
  // Form / Input
  "Button", "Checkbox", "Input", "Slider", "Switch", "Radio", "Select",
  // Display
  "Avatar", "Badge", "Card", "Image",
  // Layout
  "Grid", "Table",
  // Feedback
  "Progress", "Alert", "Toast",
  // Overlay / Composite
  "Modal", "Menu", "Popover", "Tooltip", "Drawer", "AlertDialog",
  "ActionSheet", "BottomSheet",
  // Modal/AlertDialog sub-component exception: ModalContent/AlertDialogContent
  // are the actual visible dialog boxes extracted from the overlay portal
  // — they are the renderable units in Figma.
  "ModalContent", "AlertDialogContent",
  // Disclosure
  "Accordion",
  // Navigation
  "Tabs", "Breadcrumb",
  // Form helpers
  "FormControl", "Textarea", "SelectTrigger",
  // Icon component (all icons as selectable variants)
  "Icon",
]);
