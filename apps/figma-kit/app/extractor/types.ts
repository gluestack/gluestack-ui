/**
 * extractor/types.ts
 * ------------------
 * Shared TypeScript interfaces and types for the React fiber extractor.
 * Import from here whenever you need shared data shapes across extractor modules.
 */

export interface DesignTokenRef {
  tokenName: string;
  resolvedValue: string;
  type: "color" | "spacing" | "typography" | "radius" | "shadow" | "unknown";
}

export interface SvgDimensions {
  renderedWidth: number;
  renderedHeight: number;
  intrinsicWidth?: number;
  intrinsicHeight?: number;
  viewBox?: string;
}

export interface ComponentVariant {
  name?: string;
  props: Record<string, unknown>;
  styles: Record<string, string>;
  designTokens?: Record<string, DesignTokenRef>;
  children?: ComponentVariant[];
  isTextElement?: boolean;
}

export interface ComponentDefinition {
  name: string;
  variants: ComponentVariant[];
}

export interface ComponentFnEntry {
  fn: Function;
  type: any;
}

export interface FiberExtractionResult {
  components: ComponentDefinition[];
  componentFns: Record<string, ComponentFnEntry>;
}

export interface RawEntry {
  name: string;
  props: Record<string, unknown>;
  styles: Record<string, string>;
  designTokens: Record<string, DesignTokenRef>;
  children: RawEntry[];
  isTextElement: boolean;
}

export interface UnwrappedFiber {
  fn: Function;
  name: string;
}

export interface TokenInfo {
  value: string;
  type: DesignTokenRef["type"];
}

export interface StylesheetTokenInfo {
  tokenRegistry: Record<string, TokenInfo>;
  selectorTokenMap: Map<string, Record<string, string>>;
}

export interface OverlayCandidate {
  name: string;
  type: any;
  props: Record<string, unknown>;
  domNode: Element;
  fiber: Record<string, unknown>;
  triggerStrategy: "render-prop" | "child-trigger" | "open-prop";
  triggerDomNode?: Element;
  childTriggerDomNode?: Element;
  openPropName?: string;
}

export interface OverlayExtractionResult {
  name: string;
  portalSnapshot: Element;
  components: ComponentDefinition[];
  componentFns: Record<string, ComponentFnEntry>;
}
