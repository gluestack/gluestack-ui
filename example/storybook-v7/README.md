![image](https://user-images.githubusercontent.com/3481514/145904252-92e3dc1e-591f-410f-88a1-b4250f4ba6f2.png)

# getting started

```sh
npx create-expo-app --template expo-template-storybook AwesomeStorybook
```

or

```sh
yarn create expo-app --template expo-template-storybook AwesomeStorybook
```

# app

```sh
yarn start
```

# Ondevice

In this template you can now run `yarn storybook` to start ondevice storybook or `yarn start` to start your expo app.
This works via env variables and expo constants.

```sh
# either
yarn storybook

# ios
yarn storybook:ios

# android
yarn storybook:android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```sh
yarn storybook-generate
```

# Web

Start react native web storybook:

```
yarn storybook:web
```

build react native web storybook:

```sh
yarn build-storybook
```
