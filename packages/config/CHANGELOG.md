# @gluestack-ui/config

## 1.1.19

### Patch Changes

- fix: ref typing for all the components
- Updated dependencies
  - @gluestack-ui/themed@1.1.33

## 1.1.18

### Patch Changes

- - Fixed ref attribute typings
- Updated dependencies
  - @gluestack-style/react@1.0.55
  - @gluestack-ui/themed@1.1.23

## 1.1.17

### Patch Changes

- - Fixed media queries issue with theme
- Updated dependencies
  - @gluestack-style/react@1.0.52

## 1.1.10

### Patch Changes

- dependencies changes

## 1.1.9

### Patch Changes

- fix: `lineHeight` issue with `Text`.
  - @gluestack-ui/themed@1.1.9

## 1.1.2

### Patch Changes

- af1b8e8: New Component Release (Card)
- New component release (card)

## 1.1.1

### Patch Changes

- - Fixed typescript memory overflow issue [PR](https://github.com/gluestack/gluestack-ui/pull/1693)
- Updated dependencies
  - @gluestack-style/react@1.0.43

## 1.1.0

### Minor Changes

- `InputField.ts` removed `lineHeight` from all the `size`.
- `Item.web.ts` removed file.
- `Root.tsx` migrated to new animation resolver.
  `jsx
import { styled } from '@gluestack-style/react';
import { AnimatedView } from '@gluestack-style/animation-resolver';
export const Root = styled(AnimatedView, {}, {
  componentName: 'Menu',
    } as const);
`
- Updated dependencies
  - @gluestack-ui/themed@1.1.0

## 1.0.14

### Patch Changes

- - Popover arrow support [PR](https://github.com/gluestack/gluestack-ui/pull/1677)
  - Popover animation improvements

  - Popover top placement position for mobile

- Updated dependencies
  - @gluestack-ui/themed@1.0.38

## 1.0.13

### Patch Changes

- Config added for ImageBackground, RefreshControl and VirtualizedList

## 1.0.12

### Patch Changes

- Image height and width issue.

## 1.0.11

### Patch Changes

- feat: added accrodion component.

## 1.0.10

### Patch Changes

- fix select pointer events

## 1.0.9

### Patch Changes

- fix userselect, select config

## 1.0.8

### Patch Changes

- feat: accordion theme release

## 1.0.6

### Patch Changes

- fix: tooltip pointer events

## 1.0.5

### Patch Changes

- fix: version bump @gluestack-style/react
- Updated dependencies
  - @gluestack-ui/themed@1.0.20

## 1.0.4

### Patch Changes

- fix: toast
- Updated dependencies
  - @gluestack-ui/themed@1.0.18

## 1.0.3

### Patch Changes

- fix: peer dependancy of @gluestack-ui/themed

## 1.0.2

### Patch Changes

- `@gluestack-style/react` version upgrade
  - Typing issue fixes
