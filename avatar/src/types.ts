export interface InterfaceAvatarProps {}

export interface IAvatarBadgeProps {}

export interface IAvatarGroupProps extends IAvatarProps {
  /**
   * Avatar children
   */
  children?: JSX.Element[] | JSX.Element;
}
export type IAvatarComponentType<
  AvatarProps,
  BadgeProps,
  GroupProps,
  ImageProps,
  FallbackTextProps
> = ((props: IAvatarProps & AvatarProps) => JSX.Element) & {
  Badge: (props: BadgeProps) => JSX.Element;
  Group: (props: GroupProps & IAvatarGroupProps) => JSX.Element;
  Image: (props: ImageProps) => JSX.Element;
  FallbackText: (props: FallbackTextProps) => JSX.Element;
};

export type IAvatarProps = InterfaceAvatarProps;
