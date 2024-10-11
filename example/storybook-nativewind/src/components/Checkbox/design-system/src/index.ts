export * from './core';
export {
  Box,
  Button,
  Checkbox,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Pressable,
  Radio,
  Select,
  Spinner,
  Switch,
  Text,
  TextArea,
  VStack,
  // CheckIcon,
  // InfoOutlineIcon,
  // InfoIcon,
  // Icon,
  Slider, // BulletPointIcon,
} from './primitives';
import ecosystemData from './utils/ecosystem.json';

// import data from './utils/ecosystem.json';
import data from './utils/ecosystem.json';
export { config } from './gluestack-style.config';

export { useClipboard } from './hooks';

export {
  Actionsheet,
  Center,
  Alert,
  AlertDialog,
  Avatar,
  Badge,
  Divider,
  Fab,
  FormControl,
  Menu,
  Modal,
  Popover,
  Progress,
  useToast,
  Table,
  TableContainer,
  ToastComponent,
  Tooltip,
  Slide,
  Fade,
  PresenceTransition,
  Stagger,
  Tabs,
} from './composites';

export * from './primitives/Icon';

export {
  CodeBlock,
  Nav,
  H1,
  H2,
  H3,
  H4,
  H5,
  UL,
  LI,
  Code,
  Sidebar,
  InlineCode,
  BlockQuote,
  CodePreview,
  CodePreviewWithTabs,
  Layout,
  LayoutContext,
  Blog,
  Hoverable,
  Flyout,
  Ecosystem,
  Newsletter,
  NewsletterAvatarItem,
  Community,
  MeetCreators,
  LogoTag,
} from './custom';

export { CommunityItem } from './custom';
export type { EcosystemItem, DataKey } from './utils/ecosystem';
export { ecosystemData };
export { data };
export { flush } from '@gluestack-style/react';
export { CollapsibleCode } from './custom/CollapsibleCode/index';
