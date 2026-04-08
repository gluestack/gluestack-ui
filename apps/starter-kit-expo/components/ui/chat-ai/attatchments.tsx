import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ComponentProps,
  type ReactNode,
} from 'react';
import { Platform } from 'react-native';
import { ScrollView } from 'react-native';
import { Box } from '@/components/ui/box';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import type { FileUIPart, SourceDocumentUIPart } from 'ai';
import {
  FileText,
  Globe,
  Image as ImageIcon,
  Music2,
  Paperclip,
  Video,
  X,
} from 'lucide-react-native';



export type AttachmentData =
  | (FileUIPart & { id: string })
  | (SourceDocumentUIPart & { id: string });

export type AttachmentMediaCategory =
  | 'image'
  | 'video'
  | 'audio'
  | 'document'
  | 'source'
  | 'unknown';

export type AttachmentVariant = 'grid' | 'inline' | 'list';


export const getMediaCategory = ( 
  data: AttachmentData
): AttachmentMediaCategory => {
  if (data.type === 'source-document') return 'source';

  const mediaType = data.mediaType ?? '';
  if (mediaType.startsWith('image/')) return 'image';
  if (mediaType.startsWith('video/')) return 'video';
  if (mediaType.startsWith('audio/')) return 'audio';
  if (mediaType.startsWith('application/') || mediaType.startsWith('text/'))
    return 'document';
  return 'unknown';
};

export const getAttachmentLabel = (data: AttachmentData): string => {
  if (data.type === 'source-document') {
    return data.title || data.filename || 'Source';
  }
  const category = getMediaCategory(data);
  return data.filename || (category === 'image' ? 'Image' : 'Attachment');
};


interface AttachmentsContextValue {
  variant: AttachmentVariant;
}

const AttachmentsContext = createContext<AttachmentsContextValue | null>(null);

interface AttachmentContextValue {
  data: AttachmentData;
  mediaCategory: AttachmentMediaCategory;
  onRemove?: () => void;
  variant: AttachmentVariant;
}

const AttachmentContext = createContext<AttachmentContextValue | null>(null);

export const useAttachmentsContext = () =>
  useContext(AttachmentsContext) ?? { variant: 'grid' as const };

export const useAttachmentContext = () => {
  const ctx = useContext(AttachmentContext);
  if (!ctx)
    throw new Error('Attachment components must be used within <Attachment>');
  return ctx;
};


export type AttachmentsProps = ComponentProps<typeof Box> & {
  variant?: AttachmentVariant;
};

export const Attachments = ({
  variant = 'grid',
  className = '',
  children,
  ...props
}: AttachmentsProps) => {
  const contextValue = useMemo(() => ({ variant }), [variant]);

  return (
    <AttachmentsContext.Provider value={contextValue}>
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: variant === 'list' ? 'column' : 'row',

            height: 80,
          }}
          className={`${className} bg-muted `}
          {...props}
        >
          {children}
        </ScrollView>
      </Box>
    </AttachmentsContext.Provider>
  );
};


export type AttachmentProps = ComponentProps<typeof Box> & {
  data: AttachmentData;
  onRemove?: () => void;
};

export const Attachment = ({
  data,
  onRemove,
  className = '',
  children,
  ...props
}: AttachmentProps) => {
  const { variant } = useAttachmentsContext();
  const mediaCategory = getMediaCategory(data);

  const contextValue = useMemo(
    () => ({ data, mediaCategory, onRemove, variant }),
    [data, mediaCategory, onRemove, variant]
  );

  return (
    <AttachmentContext.Provider value={contextValue}>
      <Box
        className={`
          group relative
          ${variant === 'grid' ? 'w-24 h-24 overflow-hidden rounded-lg' : ''}
          ${variant === 'inline' ? 'flex h-8 items-center gap-1.5 rounded-md border border-border px-1.5 text-sm font-medium' : ''}
          ${variant === 'list' ? 'flex w-full items-center gap-3 rounded-lg border p-3' : ''}
          ${className}
        `}
        {...props}
      >
        {children}
        {onRemove && (
          <AttachmentRemove
            className={
              Platform.OS === 'web'
                ? ''
                : 'opacity-100 absolute top-3 right-3 z-10'
            }
          />
        )}
      </Box>
    </AttachmentContext.Provider>
  );
};


export type AttachmentPreviewProps = ComponentProps<typeof Box> & {
  fallbackIcon?: ReactNode;
};

export const AttachmentPreview = ({
  fallbackIcon,
  className = '',
  ...props
}: AttachmentPreviewProps) => {
  const { data, mediaCategory, variant } = useAttachmentContext();

  const renderContent = () => {
    if (mediaCategory === 'image' && data.type === 'file' && data.url) {
      return (
        <Image
          source={{ uri: data.url }}
          alt={data.filename || 'Image'}
          className={`size-full object-cover ${variant !== 'grid' ? 'rounded' : 'rounded-xl'}`}
          style={variant === 'grid' ? { width: 104, height: 104 } : undefined}
        />
      );
    }

    const iconMap: Record<AttachmentMediaCategory, React.ComponentType<any>> = {
      audio: Music2,
      document: FileText,
      image: ImageIcon,
      source: Globe,
      unknown: Paperclip,
      video: Video,
    };

    const Icon = iconMap[mediaCategory];
    const size = variant === 'inline' ? 12 : variant === 'list' ? 24 : 20;

    return (
      fallbackIcon ?? <Icon size={size} className="text-muted-foreground" />
    );
  };

  return (
    <Box
      className={`
        flex shrink-0 items-center justify-center overflow-hidden
        ${variant === 'grid' ? 'size-full ' : ''}
        ${variant === 'inline' ? 'size-5 rounded bg-background' : ''}
        ${variant === 'list' ? 'size-12 rounded bg-muted' : ''}
        ${className}
      `}
      {...props}
    >
      {renderContent()}
    </Box>
  );
};

export type AttachmentRemoveProps = ComponentProps<typeof Button> & {
  label?: string;
};

export const AttachmentRemove = ({
  label = 'Remove',
  className = '',
  children,
  ...props
}: AttachmentRemoveProps) => {
  const { onRemove, variant } = useAttachmentContext();
  const isWeb = Platform.OS === 'web';

  const handlePress = useCallback(() => onRemove?.(), [onRemove]);

  if (!onRemove) return null;

  return (
    <Button
      onPress={handlePress}
      className={`
        ${
          variant === 'grid'
            ? isWeb
              ? 'absolute top-2 right-2 size-6 rounded-full bg-background/80 opacity-0 group-hover:opacity-100'
              : 'absolute top-3 right-3 h-8 w-8 items-center flex justify-center rounded-full bg-muted'
            : ''
        }
        ${variant === 'inline' ? 'size-5 ml-auto' : ''}
        ${variant === 'list' ? 'size-8 shrink-0 ml-auto' : ''}
        ${className}
      `}
      variant="ghost"
      size="sm"
      {...props}
    >
      {children ?? (
        <X
          className="text-destructive"
          color={'white'}
          size={variant === 'grid' ? 12 : 12}
        />
      )}
    </Button>
  );
};

export type AttachmentHoverCardProps = Omit<
  ComponentProps<typeof Tooltip>,
  'trigger' | 'children'
> & {
  children: ReactNode;
};

export const AttachmentHoverCard = ({
  children,
  placement = 'top',
  openDelay = 0,
  closeDelay = 100,
  ...props
}: AttachmentHoverCardProps) => {
  const childrenArray = React.Children.toArray(children);
  const triggerElement = childrenArray[0];
  const contentElements = childrenArray.slice(1);

  if (!triggerElement) {
    return <>{children}</>;
  }

  return (
    <Tooltip
      placement={placement}
      openDelay={openDelay}
      closeDelay={closeDelay}
      trigger={(triggerProps) => {
        if (React.isValidElement(triggerElement)) {
          return React.cloneElement(triggerElement, {
            ...triggerProps,
            ...triggerElement.props,
          });
        }
        return triggerElement;
      }}
      {...props}
    >
      {contentElements}
    </Tooltip>
  );
};

export const AttachmentHoverCardContent = ({
  className = '',
  children,
  ...props
}: ComponentProps<typeof TooltipContent>) => (
  <TooltipContent className={`w-auto p-2 ${className}`} {...props}>
    {children}
  </TooltipContent>
);

export const AttachmentHoverCardText = TooltipText;
  
export const AttachmentEmpty = ({
  className = '',
  children,
  ...props
}: ComponentProps<typeof Box>) => (
  <Box
    className={`flex items-center justify-center  text-muted-foreground text-sm ${className}`}
    {...props}
  >
    {children ?? 'No attachments'}
  </Box>
);
