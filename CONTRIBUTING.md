# Contributing to `gluestack/gluestack-ui`

- Repo link: https://github.com/gluestack/gluestack-ui
- Active branch: `patch`
- Folder structure:

  - This is a monorepo. Below are the important folders for development.
  - `example/`

    - `storybook-nativewind`

      - Contains storybook config for web
      - Contains all core components for mobile and web
      - Contains all common stories for mobile and web
      - Contains documentation page (\*.nw.stories.mdx)
        - Our website generation script will pick these files to generate docs
      - Uses Storybook v6
      - To start on the web

        ```
        yarn storybook:nativewind
        ```

      - Folder structure
        - `src/`
          - `components/` (Stories which will use core-components/nativewind/ components)
            - `core-components/`
              - `nativewind/`
                - `<component-name>` (Develop new component here)
                  - `index.tsx`

  - `storybook-v7/`
    - Contains only storybook config for mobile
    - Uses `storybook v7`
    - Uses `storybook-nativewind` stories to render on mobile
    - Uses `storybook-nativewind/../../nativewind/core-components`
    - DO NOT run this storybook for web development
    - other examples
  - `packages/`
    - Contains unstyled components package
    - Utility packages
    - Other

## Development workflow

- While developing a new component, there is no need to add a new package at first. We can move utilities or headless components inside packages/ later.
- To start adding new components.

  - Create a component in `example/storybook-nativewind/src/core-components/nativewind/<component-name>`
    - Add your custom logic here for components
  - Create a story to render and test your component in `example/storybook-nativewind/src/components/<component-name>.stories.tsx`
  - Optional: To add documentation
    - Create a mdx file in `example/storybook-nativewind/src/components/<component-name>.nw.stories.mdx`
  - Reference: button component
  - Run and test

    - Web

      - Run storybook for web in `example/storybook-nativewind`

        ```
        yarn storybook:nativewind
        ```

    - Mobile

      - Run storybook for mobile in example/storybook-v7

        ```
        yarn storybook:nativewind
        ```
