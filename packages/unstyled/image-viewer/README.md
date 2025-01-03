# @gluestack-ui/image-viewer

## Installation

To use `@gluestack-ui/image-viewer`, all you need to do is install the
`@gluestack-ui/image-viewer` package:

```sh
$ yarn add @gluestack-ui/image-viewer

# or

$ npm i @gluestack-ui/image-viewer
```

## Usage

The ImageViewer component provides a modal view for displaying and interacting with images, supporting features like pinch-to-zoom, double-tap zoom, and swipe-to-dismiss. Here's an example of how to use this package:

```jsx
import { createImageViewer } from '@gluestack-ui/image-viewer';
import { Root, Backdrop, Content, CloseButton } from './styled-components';

export const ImageViewer = createImageViewer({
  Root,
  Backdrop,
  Content,
  CloseButton,
});
```

## Customizing the ImageViewer

Default styling of all these components can be found in the components/core/image-viewer file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/ImageViewer/index.tsx) of the styled `ImageViewer` components.

```jsx
// import the styles
import {
  Root,
  Backdrop,
  Content,
  CloseButton,
} from '../components/core/image-viewer/styled-components';

// import the createImageViewer function
import { createImageViewer } from '@gluestack-ui/image-viewer';

// Understanding the API
const ImageViewer = createImageViewer({
  Root,
  Backdrop,
  Content,
  CloseButton,
});

// Using the ImageViewer component
export default () => (
  <ImageViewer isOpen={isOpen} onClose={onClose}>
    <ImageViewerBackdrop>
      <ImageViewerContent
        images={images}
        renderImages={(item) => (
          <ImageViewerImage key={item.id} source={{ uri: item.url }} />
        )}
      />
    </ImageViewerBackdrop>
  </ImageViewer>
);
```

## Component Props

### ImageViewer

| Prop     | Type      | Default | Description                                        |
| -------- | --------- | ------- | -------------------------------------------------- |
| isOpen   | boolean   | false   | If true, the modal will open                       |
| onClose  | function  | -       | Callback invoked when the modal is closed          |
| children | ReactNode | -       | The content to be rendered inside the image viewer |

### ImageViewerContent

| Prop         | Type                             | Default | Description                        |
| ------------ | -------------------------------- | ------- | ---------------------------------- |
| images       | Array<{id: number, url: string}> | -       | Array of image objects to display  |
| renderImages | (item: any) => ReactNode         | -       | Function to render each image item |

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/media-and-icons/image-viewer).
