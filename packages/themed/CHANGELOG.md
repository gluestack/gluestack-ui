# @gluestack-ui/themed

## 1.0.24

### Patch Changes

- Fixed Avatar size styling

## 1.0.23

### Patch Changes

- fix: Actionsheet create tree walk.
- fix: slider step issue on native.
- feat: New Component release Accordion(beta).

## 1.0.22

### Patch Changes

- Fixed SliderThumb movement on adding steps greater than 1

## 1.0.21

### Patch Changes

- fix: popover animation issue

## 1.0.20

### Patch Changes

- fix: version bump @gluestack-style/react

## 1.0.19

### Patch Changes

- `Toast` white notch issue.

## 1.0.18

### Patch Changes

- Fixed Textarea warning.
- Fixed SelectInput issues on ios.
- `Toast` Shadow issue in android.
- `Toast` shifted to new animation API.
- `gluestack-style` version bump:
  - fixed warning when no config passed to GluestackUIProvider.
- Breaking Changes (Ejected Theme).
  - Add new `ToastAnimationWrapper.ts` file for Animation Wrapper of Toast. contain is shown below.
  ```jsx
  // ToastAnimationWrapper.ts
  import { createStyle } from '@gluestack-style/react';
  export const ToastAnimationWrapper = createStyle({
    m: '$3',
    backgroundColor: 'white',
    borderRadius: '$sm',
    flexDirection: 'row',
    _web: {
      pointerEvents: 'auto',
    },
    defaultProps: {
      hardShadow: '5',
    },
  });
  ```
  - Remove this `m: '$3'`, `hardShadow: '5'`, `borderRadius: '$sm'` styles from `Toast.ts` file.

## 1.0.17

### Patch Changes

- fix: cyclic dependency and avatar image

## 1.0.16

### Patch Changes

- removed extra exports and fixed icon fill typing
- e3ceb642a: button spinner inherited from spinner instead of activity indicator

## 1.0.15

### Patch Changes

- button spinner inherited from spinner instead of activity indicator

## 1.0.14

### Patch Changes

- fixed role for image and icon to img instead of image

## 1.0.13

### Patch Changes

- Fixed utility props typings [PR](https://github.com/gluestack/gluestack-style/pull/524)

## 1.0.12

### Patch Changes

- Added utility props support [PR](https://github.com/gluestack/gluestack-ui/pull/1364)

## 1.0.11

### Patch Changes

- fix input disabled and editable.

## 1.0.10

### Patch Changes

- - Added `useMedia` hook [PR](https://github.com/gluestack/gluestack-ui/pull/1349)

## 1.0.9

### Patch Changes

- Removed creator functions for hstack and vestack and upgraded input version

## 1.0.8

### Patch Changes

- Updated all the components with new version of react-native and react-native-web

## 1.0.7

### Patch Changes

- `@gluestack-style/react` version upgrade
  - Typing issue fixes

## 1.0.6

### Patch Changes

- `containerStyle` support sx props.

## 0.1.56

### Patch Changes

- buttongroup gap fixes

## 0.1.55

### Patch Changes

- Fixed component apis

## 0.1.53

### Patch Changes

- Fixed overlay components backdrop interactivity issue

## 0.1.52

### Patch Changes

- fixed provider warnings

## 0.1.51

### Patch Changes

- fixed buttongroup spacer issue

## 0.1.50

### Patch Changes

- - Radio Icon render issue on native devices

## 0.1.49

### Patch Changes

- - Switch trackColor, thumbColor, activeThumbColor, activeTrackColor resolution in sx props

## 0.1.48

### Patch Changes

- Icon fill accepts token now

## 0.1.47

### Patch Changes

- Added linear gradient as a component

## 0.1.46

### Patch Changes

- @gluestack-style/react version bump

## 0.1.45

### Patch Changes

- Fixed image on expo

## 0.1.44

### Patch Changes

- Added `@gluestack-ui/image` Image Package to themed

## 0.1.43

### Patch Changes

- Exported style core hooks `useToken`, `useColorMode` and `useBreakpointValue`

### Dependency Updates

- Please update `@gluestack-style/react` to `0.2.47` for compatibility and improved functionality/

## 0.1.42

### Patch Changes

- Fixed peer dependency for react-native-svg

## 0.1.41

### Patch Changes

- Changed API for Input: Added InputSlot and InputIcon

## 0.1.40

### Patch Changes

- Fix: Version issue in build

## 0.1.39

### Patch Changes

- Updated Actionsheet, VStack, HStack and Input Creator Versions.

## 0.1.38

### Patch Changes

- Fixed multiline waring in `Textarea` [#1051](https://github.com/gluestack/gluestack-ui/pull/1051).
- Added typing support for external config. [#1060](https://github.com/gluestack/gluestack-ui/pull/1060)

## 0.1.37

### Patch Changes

- Fixed overlay components

## 0.1.36

### Patch Changes

- - Removed `LinearGradient` component (Please follow this [link](https://snack.expo.dev/@gluestack/gluestack-ui-linear-gradient) for LinearGradient implementation)

## 0.1.35

### Patch Changes

- fixed slider on ios and icon version upgrade

## 0.1.34

### Patch Changes

- - Peer dependencies updated

## 0.1.33

### Patch Changes

- Menu top position on native devices

## 0.1.32

### Patch Changes

- fix: react native svg dependancy

## 0.1.31

### Patch Changes

- Top position issue with `overlay` components.
- `react-native-svg` version issue.

## 0.1.30

### Patch Changes

- - Icon size issue with `lucide-react-native` icons

## 0.1.27

### Patch Changes

- - `@glustack-style/react` version updated

## 0.1.26

### Patch Changes

- - `@gluestack-style/react` version updated
  - Passing prop issue fixes

## 0.1.25

### Patch Changes

- Removed unwanted react native svg dependencies.
- Styling fixes for checkbox and radio.

## 0.1.22

### Patch Changes

- - State passing props resolution fixes.

## 0.1.21

### Patch Changes

- - Icon size issue fixes on web

## 0.1.20

### Patch Changes

- Updated version of @gluestack-style/react

## 0.1.19

### Patch Changes

- Fixing the version issue and Theme component not exported

## 0.1.18

### Patch Changes

- Removed default gap from VStack and HStack

## 0.1.17

### Patch Changes

- Version updated @gluestack-ui/hstack, @gluestack-ui/vstack.
  - Support for gap property in HStack, VStack.
  - `space` typing suggestion in HStack, Vstack.
- Version updated `@gluestack-style/react`
  - Dyanmic variable resolution in colorMode sx prop.

## 0.1.15

### Patch Changes

- gluestack style version bump

## 0.1.14

### Patch Changes

- Version issue and install issues fixes [#942](https://github.com/gluestack/gluestack-ui/pull/942)

## 0.1.13

### Feature

- Introducing new component `Linear Gradient` [#907](https://github.com/gluestack/gluestack-ui/pull/907).

## 0.1.12

### Patch Changes

- - Typing fixes for extended theme [#928](https://github.com/gluestack/gluestack-ui/pull/928).
  - props typing improvements [#929](https://github.com/gluestack/gluestack-ui/pull/929).
