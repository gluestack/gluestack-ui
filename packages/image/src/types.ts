export interface InterfaceImageProps {}
export interface IImageBadgeProps {}
export interface IImageGroupProps extends IImageProps {
  /**
   * Image children
   */
  children?: JSX.Element[] | JSX.Element;
}
export type IImageComponentType<ImageProps> = (
  props: IImageProps & ImageProps
) => JSX.Element;

export type IImageProps = InterfaceImageProps;
