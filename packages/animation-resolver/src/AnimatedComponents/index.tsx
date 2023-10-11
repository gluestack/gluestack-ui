import React from 'react';
import { useStyled } from '@gluestack-style/react';
import type {
  ImageProps,
  PressableProps,
  ViewProps,
  TextProps,
  ScrollViewProps,
  FlatListProps,
  SectionListProps,
} from 'react-native';
import type {
  SvgProps,
  GProps,
  ClipPathProps,
  RectProps,
  PolylineProps,
  CircleProps,
  EllipseProps,
  LineProps,
  PathProps,
  TSpanProps,
  TextPathProps,
} from 'react-native-svg';

const getAnimationResolverPlugin: any = (plugins: any[]) => {
  let pluginData;
  plugins?.forEach((plugin) => {
    if (plugin.name === 'AnimationResolver') {
      pluginData = plugin;
    }
  });

  return pluginData;
};

const animatedComponent = (componentName: string, _props: any) => {
  return React.forwardRef(({ ...props }: any, ref: any) => {
    const ctx = useStyled();
    // let animationDriverData = ctx?.config?.plugins[0]?.componentDriver;

    let animationDriverData: any = getAnimationResolverPlugin(
      ctx?.config?.plugins
    )?.componentDriver;

    if (animationDriverData?.engine[componentName]) {
      const Component = animationDriverData.engine[componentName];
      return <Component {..._props} {...props} ref={ref} />;
    }
    return <React.Fragment {..._props} {...props} ref={ref}></React.Fragment>;
  });
};

const AnimatedText = (
  props: TextProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Text', props);
  return <Component {...props} />;
};
const AnimatedView = (
  props: ViewProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('props', props);
  return <Component {...props} />;
};

const AnimatedPressable = (
  props: PressableProps & {
    animationComponentGluestack: true;
  }
) => {
  // @ts-ignore
  const Component = animatedComponent('Pressable', props);
  return <Component {...props} />;
};
const AnimatedImage = (
  props: ImageProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Image', props);
  return <Component {...props} />;
};
const AnimatedScrollView = (
  props: ScrollViewProps & { animationComponentGluestack: true }
) => {
  const Component = animatedComponent('ScrollView', props);
  return <Component {...props} />;
};
const AnimatedSafeAreaView = (props: React.PropsWithChildren) => {
  const Component = animatedComponent('SafeAreaView', props);
  return <Component {...props} />;
};
const AnimatedFlatList = (
  props: FlatListProps<any> & { animationComponentGluestack: true }
) => {
  const Component = animatedComponent('FlatList', props);
  return <Component {...props} />;
};
const AnimatedSectionList = (
  props: SectionListProps<any> & { animationComponentGluestack: true }
) => {
  const Component = animatedComponent('SectionList', props);
  return <Component {...props} />;
};

const AnimatedSvg = (
  props: SvgProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Svg', props);
  return <Component {...props} />;
};
const AnimatedRect = (
  props: RectProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Rect', props);
  return <Component {...props} />;
};
const AnimatedCircle = (
  props: CircleProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Circle', props);
  return <Component {...props} />;
};
const AnimatedEllipse = (
  props: EllipseProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Ellipse', props);
  return <Component {...props} />;
};
const AnimatedLine = (
  props: LineProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Line', props);
  return <Component {...props} />;
};
const AnimatedPolyline = (
  props: PolylineProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Polyline', props);
  return <Component {...props} />;
};
const AnimatedPath = (
  props: PathProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('Path', props);
  return <Component {...props} />;
};
const AnimatedTSpan = (
  props: TSpanProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('TSpan', props);
  return <Component {...props} />;
};
const AnimatedTextPath = (
  props: TextPathProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('TextPath', props);
  return <Component {...props} />;
};
const AnimatedG = (
  props: GProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('G', props);
  return <Component {...props} />;
};
const AnimatedClipPath = (
  props: ClipPathProps & {
    animationComponentGluestack: true;
  }
) => {
  const Component = animatedComponent('ClipPath', props);
  return <Component {...props} />;
};
const AnimatePresence = animatedComponent('AnimatePresence', {});

AnimatedText.displayName = 'Gluestack-AnimatedResolver-AnimatedText';
AnimatedView.displayName = 'Gluestack-AnimatedResolver-AnimatedView';
AnimatedPressable.displayName = 'Gluestack-AnimatedResolver-AnimatedPressable';
AnimatedImage.displayName = 'Gluestack-AnimatedResolver-AnimatedImage';
AnimatedScrollView.displayName =
  'Gluestack-AnimatedResolver-AnimatedScrollView';
AnimatedSafeAreaView.displayName =
  'Gluestack-AnimatedResolver-AnimatedSafeAreaView';
AnimatedFlatList.displayName = 'Gluestack-AnimatedResolver-AnimatedFlatList';
AnimatedSectionList.displayName =
  'Gluestack-AnimatedResolver-AnimatedSectionList';
AnimatePresence.displayName =
  'Gluestack-AnimatedResolver-AnimatedAnimatePresence';
AnimatedSvg.displayName = 'Gluestack-AnimatedResolver-AnimatedSvg';
AnimatedRect.displayName = 'Gluestack-AnimatedResolver-AnimatedRect';
AnimatedCircle.displayName = 'Gluestack-AnimatedResolver-AnimatedCircle';
AnimatedEllipse.displayName = 'Gluestack-AnimatedResolver-AnimatedEllipse';
AnimatedLine.displayName = 'Gluestack-AnimatedResolver-AnimatedLine';
AnimatedPolyline.displayName = 'Gluestack-AnimatedResolver-AnimatedPolyline';
AnimatedPath.displayName = 'Gluestack-AnimatedResolver-AnimatedPath';
AnimatedTSpan.displayName = 'Gluestack-AnimatedResolver-AnimatedTSpan';
AnimatedTextPath.displayName = 'Gluestack-AnimatedResolver-AnimatedTextPath';
AnimatedG.displayName = 'Gluestack-AnimatedResolver-AnimatedG';
AnimatedClipPath.displayName = 'Gluestack-AnimatedResolver-AnimatedClipPath';

export {
  AnimatedText,
  AnimatedView,
  AnimatedPressable,
  AnimatedImage,
  AnimatedScrollView,
  AnimatedSafeAreaView,
  AnimatedFlatList,
  AnimatedSectionList,
  AnimatePresence,
  AnimatedSvg,
  AnimatedRect,
  AnimatedCircle,
  AnimatedEllipse,
  AnimatedLine,
  AnimatedPolyline,
  AnimatedPath,
  AnimatedTSpan,
  AnimatedTextPath,
  AnimatedG,
  AnimatedClipPath,
};
