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

const getAnimationResolverPlugin: any = (plugins: any[]) => {
  let pluginData;
  plugins.forEach((plugin) => {
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
      return <Component {...props} ref={ref} />;
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
const AnimatePresence = (props: any) => {
  const Component = animatedComponent('AnimatePresence', props);
  return <Component {...props} />;
};

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
};
