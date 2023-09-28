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
> = React.ForwardRefExoticComponent<
  (props: IAvatarProps & AvatarProps) => JSX.Element
> & {
  Badge: React.ForwardRefExoticComponent<(props: BadgeProps) => JSX.Element>;
  Group: React.ForwardRefExoticComponent<
    (props: GroupProps & IAvatarGroupProps) => JSX.Element
  >;
  Image: React.ForwardRefExoticComponent<(props: ImageProps) => JSX.Element>;
  FallbackText: React.ForwardRefExoticComponent<
    (props: FallbackTextProps) => JSX.Element
  >;
};

export type IAvatarProps = InterfaceAvatarProps;
