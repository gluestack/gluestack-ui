import React from 'react';
import { useStyled } from '..';

const AnimatedText = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedView = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedPressable = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedImage = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedScrollView = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedSafeAreaView = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedFlatList = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedSectionList = (props: React.PropsWithChildren) => {
  return <React.Fragment {...props}></React.Fragment>;
};
const AnimatedAnimatePresence = React.forwardRef(
  ({ ...props }: any, ref: any) => {
    const ctx = useStyled();
    let animationDriverData = ctx.animationDriverData;
    if (animationDriverData?.engine.AnimatePresence) {
      return (
        <animationDriverData.engine.AnimatePresence {...props} ref={ref} />
      );
    }
    return <React.Fragment {...props} ref={ref}></React.Fragment>;
  }
);
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
AnimatedAnimatePresence.displayName =
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
  AnimatedAnimatePresence,
};
