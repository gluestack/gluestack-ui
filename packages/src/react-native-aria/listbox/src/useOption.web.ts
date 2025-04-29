import { getItemCount } from '@react-stately/collections';
import { getItemId } from './utils';
import { Key, RefObject } from 'react';
import { isFocusVisible } from '@react-aria/interactions';
import { useHover, usePress } from '@react-native-aria/interactions';
import { isMac, isWebKit, mergeProps, useSlotId } from '@react-aria/utils';
import { ListState } from '@react-stately/list';
import { useSelectableItem } from '@react-aria/selection';
import { useMapDomPropsToRN } from '@react-native-aria/utils';

interface OptionAria {
  /** Props for the option element. */
  optionProps: any;

  /** Props for the main text element inside the option. */
  labelProps: any;

  /** Props for the description text element inside the option, if any. */
  descriptionProps: any;
}

interface AriaOptionProps {
  /** Whether the option is disabled. */
  'isDisabled'?: boolean;

  /** Whether the option is selected. */
  'isSelected'?: boolean;

  /** A screen reader only label for the option. */
  'aria-label'?: string;

  /** The unique key for the option. */
  'key'?: Key;

  /** Whether selection should occur on press up instead of press down. */
  'shouldSelectOnPressUp'?: boolean;

  /** Whether the option should be focused when the user hovers over it. */
  'shouldFocusOnHover'?: boolean;

  /** Whether the option is contained in a virtual scrolling listbox. */
  'isVirtualized'?: boolean;

  /** Whether the option should use virtual focus instead of being focused directly. */
  'shouldUseVirtualFocus'?: boolean;
}

/**
 * Provides the behavior and accessibility implementation for an option in a listbox.
 * See `useListBox` for more details about listboxes.
 * @param props - Props for the option.
 * @param state - State for the listbox, as returned by `useListState`.
 */
export function useOption<T>(
  props: AriaOptionProps,
  state: ListState<T>,
  ref: RefObject<HTMLElement>
): OptionAria {
  let {
    isSelected,
    isDisabled,
    key,
    shouldSelectOnPressUp,
    shouldFocusOnHover,
    isVirtualized,
    shouldUseVirtualFocus,
  } = props;

  let labelId = useSlotId();
  let descriptionId = useSlotId();

  let _optionProps: any = {
    'role': 'option',
    'aria-disabled': isDisabled,
    'aria-selected': isSelected,
  };

  // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
  // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
  // https://bugs.webkit.org/show_bug.cgi?id=209279
  if (!(isMac() && isWebKit())) {
    _optionProps['aria-label'] = props['aria-label'];
    _optionProps['aria-labelledby'] = labelId;
    _optionProps['aria-describedby'] = descriptionId;
  }

  if (isVirtualized) {
    //@ts-ignore
    _optionProps['aria-posinset'] = state.collection.getItem(key).index + 1;
    _optionProps['aria-setsize'] = getItemCount(state.collection);
  }

  let { itemProps } = useSelectableItem({
    selectionManager: state.selectionManager,
    //@ts-ignore
    key,
    ref,
    shouldSelectOnPressUp,
    isVirtualized,
    shouldUseVirtualFocus,
  });

  let { pressProps } = usePress({
    ...itemProps,
    isDisabled,
    preventFocusOnPress: shouldUseVirtualFocus,
  });

  let { hoverProps } = useHover(
    {
      isDisabled: isDisabled || !shouldFocusOnHover,
      onHoverStart() {
        if (!isFocusVisible()) {
          state.selectionManager.setFocused(true);
          //@ts-ignore
          state.selectionManager.setFocusedKey(key);
        }
      },
    },
    ref
  );

  // Putting this as a last resort, after several hours of debugging.
  // Why?
  // tabListProps adds onMouseDown with preventDefault in useSelectableCollection.ts (React Aria) and react-native-web uses onClick for onPress.
  // This results in tab button not getting focused when clicked
  // See this example - https://codesandbox.io/s/issue-i-know-but-dont-know-why-1-ydyw5?file=/src/App.js
  const onMouseDown = (e: any) => e.stopPropagation();

  _optionProps = {
    ..._optionProps,
    ...mergeProps(pressProps, hoverProps),
    //@ts-ignore
    id: getItemId(state, key),
    onMouseDown,
  };

  const optionProps = useMapDomPropsToRN(_optionProps, ref);

  return {
    optionProps,
    labelProps: {
      id: labelId,
    },
    descriptionProps: {
      id: descriptionId,
    },
  };
}
