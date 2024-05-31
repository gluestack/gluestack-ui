import React from 'react';
import { skeletonStyle, skeletonTextStyle } from './styles';

const Skeleton = ({
  className,
  variant,
  children,
  speed = 2,
  startColor = 'bg-background-200',
  isLoaded = false,
  ...props
}: any) => {
  if (!isLoaded) {
    return (
      <div
        className={`animate-pulse ${startColor} ${skeletonStyle({
          variant,
          speed,
          class: className,
        })}`}
        {...props}
      />
    );
  } else {
    return children;
  }
};

const SkeletonText = ({
  className,
  _lines,
  isLoaded = false,
  startColor = 'bg-background-200',
  gap = 2,
  children,
  ...props
}: any) => {
  if (!isLoaded) {
    if (_lines) {
      return (
        <div
          className={`flex flex-col ${skeletonTextStyle({
            gap,
          })}`}
        >
          {Array.from({ length: _lines }).map((_, index) => (
            <div
              key={index}
              className={`animate-pulse ${startColor} ${skeletonTextStyle({
                class: className,
              })}`}
              {...props}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div
          className={`animate-pulse ${startColor} ${skeletonTextStyle({
            class: className,
          })}`}
          {...props}
        />
      );
    }
  } else {
    return children;
  }
};

Skeleton.displayName = 'Skeleton';
SkeletonText.displayName = 'SkeletonText';

export { Skeleton, SkeletonText };
