/**
 * extractor/overlay/detector.ts
 * --------------------------------
 * Scans the fiber tree to find overlay candidates and classify
 * each one into Pattern A (render-prop), B (child-trigger), or
 * C (open-prop). Returns the candidate list for extraction.
 */

import { OverlayCandidate } from "../types";
import { unwrapFiberType, getDomFromFiber } from "../fiber/fiber-utils";
import {
  hasTriggerRenderProp,
  findChildTriggerFiber,
  getOpenPropName,
  findRenderPropTriggerDom,
  findChildTriggerDom,
} from "./signals";

export function detectOverlayCandidates(
  rootFiber: Record<string, unknown>,
): OverlayCandidate[] {
  const candidates: OverlayCandidate[] = [];
  const seen = new Set<string>();

  function walk(fiber: Record<string, unknown>): void {
    if (!fiber) return;

    const unwrapped = unwrapFiberType(fiber.type);
    if (unwrapped && unwrapped.name && unwrapped.name !== "Anonymous") {
      const name = unwrapped.name;
      const props = (fiber.memoizedProps as Record<string, unknown>) ?? {};

      if (!seen.has(name)) {
        if (hasTriggerRenderProp(props)) {
          seen.add(name);
          const domNode = getDomFromFiber(fiber);
          if (domNode) {
            const triggerDomNode = findRenderPropTriggerDom(fiber) ?? undefined;
            candidates.push({
              name,
              type: fiber.type,
              props,
              domNode,
              fiber,
              triggerStrategy: "render-prop",
              triggerDomNode,
            });
          }
        } else {
          const triggerChildFiber = findChildTriggerFiber(fiber);
          if (triggerChildFiber) {
            seen.add(name);
            const domNode = getDomFromFiber(fiber);
            if (domNode) {
              candidates.push({
                name,
                type: fiber.type,
                props,
                domNode,
                fiber,
                triggerStrategy: "child-trigger",
                childTriggerDomNode:
                  findChildTriggerDom(triggerChildFiber) ?? undefined,
              });
            }
          } else {
            const openPropName = getOpenPropName(props);
            if (openPropName) {
              seen.add(name);
              const domNode = getDomFromFiber(fiber);
              if (domNode) {
                candidates.push({
                  name,
                  type: fiber.type,
                  props,
                  domNode,
                  fiber,
                  triggerStrategy: "open-prop",
                  openPropName,
                });
              }
            }
          }
        }
      }
    }

    if (fiber.child) walk(fiber.child as Record<string, unknown>);
    if (fiber.sibling) walk(fiber.sibling as Record<string, unknown>);
  }

  walk(rootFiber);
  return candidates;
}
