# @gluestack-ui/image-viewer

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Customizing the ImageViewer](#customizing-the-imageviewer)
- [Component Props](#component-props)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use `@gluestack-ui/image-viewer`, install the package using either Yarn or npm:

```sh
$ yarn add @gluestack-ui/image-viewer

# or

$ npm i @gluestack-ui/image-viewer
```

## Usage

The ImageViewer component provides a modal view for displaying and interacting with images, supporting features like pinch-to-zoom, double-tap zoom, and swipe up/down to dismiss. Here's an example of how to use this package:

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

### Component Props

This section provides a comprehensive reference list for the component props, detailing descriptions, properties, types, and default behavior for easy project integration.

#### ImageViewer

The`ImageViewer` component serves as the main container for displaying images in a modal view. It provides a user-friendly interface for viewing images with features like pinch-to-zoom, double-tap zoom, and swipe gestures for dismissal. It is built on top of React Native's [Modal](https://reactnative.dev/docs/modal) component, inheriting all its properties and behaviors.

<Wrapper>
  <TableContainer>
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TH>
            <Table.TText>Prop</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Type</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Default</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Description</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Required</Table.TText>
          </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD>
            <Table.TText>
              <InlineCode>isOpen</InlineCode>
            </Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>boolean</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>-</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>{`If true, the image-viewer modal will open. Useful for controllable state behavior.`}</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Yes</Table.TText>
          </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD>
            <Table.TText>
              <InlineCode>onClose</InlineCode>
            </Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>{`() => any`}</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>-</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>{`Callback invoked when the image-viewer modal is closed.`}</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Yes</Table.TText>
          </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </TableContainer>
</Wrapper>

#### ImageViewerContent

The `ImageViewerContent` component is responsible for rendering the images within the `ImageViewer`. It supports gestures for zooming and panning, allowing users to interact with the images. This component leverages React Native's [Animated](https://reactnative.dev/docs/animated#props) & [View](https://reactnative.dev/docs/view) components, as well as gesture handling from the [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) library.

<Wrapper>
  <TableContainer>
    <Table>
      <Table.THead>
        <Table.TR>
          <Table.TH>
            <Table.TText>Prop</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Type</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Default</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Description</Table.TText>
          </Table.TH>
          <Table.TH>
            <Table.TText>Required</Table.TText>
          </Table.TH>
        </Table.TR>
      </Table.THead>
      <Table.TBody>
        <Table.TR>
          <Table.TD>
            <Table.TText>
              <InlineCode>images</InlineCode>
            </Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Array&lt;{`any`}&gt;</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>-</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Array of image objects to display</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Yes</Table.TText>
          </Table.TD>
        </Table.TR>
        <Table.TR>
          <Table.TD>
            <Table.TText>
              <InlineCode>renderImages</InlineCode>
            </Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>(item: any) => ReactNode</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>-</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Function to render each image item</Table.TText>
          </Table.TD>
          <Table.TD>
            <Table.TText>Yes</Table.TText>
          </Table.TD>
        </Table.TR>
      </Table.TBody>
    </Table>
  </TableContainer>
</Wrapper>

#### ImageViewerCloseButton

The `ImageViewerCloseButton` component provides a customizable button for closing the `ImageViewer`. It is typically placed within the `ImageViewerContent` and can be styled to match the application's design. It inherits properties from React Native's [View](https://reactnative.dev/docs/view) component.

#### ImageViewerBackdrop

The `ImageViewerBackdrop` component serves as the background layer of the `ImageViewer`, providing a dimmed or blurred effect behind the content. It enhances the focus on the images being viewed. This component is built using React Native's [Animated](https://reactnative.dev/docs/animated#props) & [View](https://reactnative.dev/docs/view) components, allowing for smooth transitions and animations.

#### ImageViewerImage

The `ImageViewerImage` component is used to display individual images within the `ImageViewerContent`. It supports all the properties of React Native's [Image](https://reactnative.dev/docs/image) component, making it easy to customize the appearance and behavior of the images.

## Contributing

We welcome contributions to the `@gluestack-ui/image-viewer` package. If you have an idea for a new feature or a bug fix, please read our [contributing guide](https://github.com/gluestack/gluestack-ui/blob/main/CONTRIBUTING.md) for instructions on how to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/gluestack/gluestack-ui/blob/main/LICENSE) file for more details.
