---
"gluestack-ui": patch
---

Migrate Actionsheet, Select, and Tooltip animations from `@legendapp/motion` to `react-native-reanimated`:

- Remove `@legendapp/motion` from the `init` and `upgrade` install paths and from all component `dependencies.json` files. Its outdated `nativewind >=4.0.0` peer range conflicted with NativeWind v5 prereleases, forcing `--legacy-peer-deps` on fresh installs.
- The components now animate with reanimated `entering`/`exiting` layout animations: the actionsheet/select content slides up from the bottom and back down (200ms), the backdrop fades in and out (200ms), and the tooltip fades (100ms).
- Components now pin `react-native-reanimated@~4.4.1` in `dependencies.json`, matching the existing alert-dialog/drawer/modal convention.
- Intentional behavior changes: the Select backdrop dim normalizes to 50% black (was 25% effective — a stacking artifact of the old library); the Tooltip uses a plain fade instead of a scale/offset pop; backdrop fade-out now plays on web.
- The actionsheet content's bottom position is now real layout (`absolute bottom-0`) instead of a permanent translateY.
- Note: `gluestack-ui add` copies component source code only. Projects initialized before v4 that lack `react-native-reanimated` should install it manually (`npx expo install react-native-reanimated` for Expo).
