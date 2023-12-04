import { GSConfig } from '@gluestack-style/react';

type IMediaQueries = keyof GSConfig['tokens']['mediaQueries'];

type IHiddenProps = {
  /**
   * The from prop takes breakpoint from which the wrapped component is hidden.
   */
  from?: IMediaQueries;
  /**
   * The till prop takes breakpoint till which the wrapped component is hidden.
   */
  till?: IMediaQueries;
  /**
   * The only prop takes array of breakpoints on which the wrapped component is hidden.
   * It hides the component starting from that breakpoint to the next breakpoint.
   */
  only?: IMediaQueries | IMediaQueries[];
  /**
   * The colormode takes the mode on which the wrapped component must be hidden.
   */
  colorMode?: 'light' | 'dark';
  /**
   * The platform takes the platform as string or array for the multiple on which the wrapped component must be hidden.
   */
  platform?: 'ios' | 'android' | 'web' | Array<'ios' | 'android' | 'web'>;
  /**
   *
   */
  children: React.ReactElement;
};

export default IHiddenProps;
