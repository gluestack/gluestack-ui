import React, { forwardRef } from 'react';

import { Pressable, Text, View } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { useState } from 'react';

export type IActionsheetComponentType<A, B, C> = ((props: A) => JSX.Element) & {
  Content: (props: C) => JSX.Element;
  Item: (props: B) => JSX.Element;
};

const ActionSheetMain = (Root: any) => {
  // eslint-disable-next-line react/display-name
  return forwardRef(() => {
    return <Root></Root>;
  });
};

// export interface IActionsheetComponentType<A, B, C> {
//   (props: A): JSX.Element;
//   Item: (props: B) => JSX.Element;
//   Content: (props: C) => JSX.Element;
// }

export function createActionsheet<A, B, C>({
  Root,
  Item,
  Content,
}: {
  Root: React.ComponentType<A>;
  Item: React.ComponentType<B>;
  Content: React.ComponentType<C>;
}) {
  // {
  //   Root: React.ComponentType<A>;
  //   Content: React.ComponentType<B>;
  //   Item: React.ComponentType<C>;
  //   DragIndicator: React.ComponentType<D>;
  //   ItemText: React.ComponentType<E>;
  //   Backdrop: React.ComponentType<F>;
  //   DragIndicatorWrapper: React.ComponentType<G>;
  // }
  const Actionsheet = ActionSheetMain(Root) as any;
  Actionsheet.Content = ActionSheetMain(Content) as any;
  Actionsheet.Item = ActionSheetMain(Item) as any;
  // Actionsheet.Content = ActionsheetContent(Content) as (
  //   props: G
  // ) => JSX.Element;
  // Actionsheet.Item = ActionsheetItem(Item) as (props: C) => JSX.Element;
  // Actionsheet.ItemText = ActionsheetItemText(ItemText);
  // Actionsheet.DragIndicator = ActionsheetDragIndicator(DragIndicator);
  // Actionsheet.Backdrop = ActionsheetBackdrop(Backdrop);
  // Actionsheet.DragIndicatorWrapper =
  //   ActionsheetDragIndicatorWrapper(IndicatorWrapper);

  // Actionsheet.displayName = 'Actionsheet';
  // Actionsheet.Content.displayName = 'Actionsheet.Content';
  // Actionsheet.Item.displayName = 'Actionsheet.Item';
  // Actionsheet.ItemText.displayName = 'Actionsheet.ItemText';
  // Actionsheet.DragIndicator.displayName = 'Actionsheet.DragIndicator';
  // Actionsheet.Backdrop.displayName = 'Actionsheet.Backdrop';
  // Actionsheet.DragIndicatorWrapper.displayName =
  //   'Actionsheet.DragIndicatorWrapper';

  // console.log(Actionsheet, 'Actionsheet');

  return Actionsheet as IActionsheetComponentType<A, B, C>;
}

const Root = styled(
  Pressable,
  {
    alignItems: 'center',
    p: '$2',
    rounded: 'none',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bg: '$white',
    _web: {
      userSelect: 'none',
    },
  },
  {}
);
const Content = styled(
  Pressable,
  {
    alignItems: 'center',
    p: '$2',
    rounded: 'none',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bg: '$white',
    _web: {
      userSelect: 'none',
    },
  },
  {}
);
const Item = styled(
  Pressable,
  {
    alignItems: 'center',
    p: '$2',
    rounded: 'none',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bg: '$white',
    _web: {
      userSelect: 'none',
    },
  },
  {}
);

export const ActionsheetTemp = createActionsheet({
  Root,
  Item,
  Content,
});

const StyledButtonStateProps = styled(
  Pressable,
  {
    'bg': '$primary600',
    'p': '$3',

    '_text': {
      color: '$white',
    },

    ':hover': {
      bg: '$primary700',
    },
  },
  { descendantStyle: ['_text'] }
);

export function Typescript({ ...args }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <StyledButtonStateProps
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        states={{
          hover: isHovered,
        }}
        {...args}
      ></StyledButtonStateProps>
      <ActionsheetTemp>
        <ActionsheetTemp.Item />
      </ActionsheetTemp>
    </Wrapper>
  );
}

export default Typescript;
