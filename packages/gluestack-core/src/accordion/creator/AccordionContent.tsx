import { mergeRefs } from '@gluestack-ui/utils/common';
import React, {
  forwardRef,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import { Platform } from 'react-native';
import { AccordionItemContext } from './Context';

export const AccordionContent = (StyledAccordionContent: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { regionProps, isExpanded } = useContext(AccordionItemContext);
    const contentRef = useRef<HTMLElement | null>(null);
    const mergedRef = mergeRefs([ref, contentRef]);

    // On web, collapsed panel content stays mounted (e.g. for height animation) but must
    // not be tab-focusable. RN Web's View does not forward `inert`, so set it on the host.
    useLayoutEffect(() => {
      if (Platform.OS !== 'web') return;
      const node = contentRef.current;
      if (!node || typeof node.setAttribute !== 'function') return;
      if (!isExpanded) {
        node.setAttribute('inert', '');
      } else {
        node.removeAttribute('inert');
      }
    }, [isExpanded]);

    const webCollapsedA11y =
      Platform.OS === 'web' && !isExpanded ? { 'aria-hidden': true } : {};

    // Animation is now handled in the style file layer, not in core
    // This allows users to customize animations by modifying the style file
    return (
      <StyledAccordionContent
        ref={mergedRef}
        {...props}
        {...regionProps}
        {...webCollapsedA11y}
      >
        {children}
      </StyledAccordionContent>
    );
  });
