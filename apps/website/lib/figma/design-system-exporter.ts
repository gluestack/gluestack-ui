/**
 * Design System Exporter
 *
 * Assembles the final DesignSystemExport JSON that the Figma plugin consumes.
 * Combines:
 *  - Metadata
 *  - Tokens (from token-extractor)
 *  - Components + variants (from component-registry)
 *  - Rendered instance trees (from DOM inspection)
 */
import {
  COMPONENT_REGISTRY,
  getVariantCombinations,
  type RegistryEntry,
} from './component-registry';
import { extractTokens, type DesignTokens } from './token-extractor';

// ─────────────────────────────────────────────────────────────────────────────
// Types (matches PRD §5.2)
// ─────────────────────────────────────────────────────────────────────────────

export interface FigmaNodeJSON {
  type: 'FRAME' | 'TEXT' | 'RECTANGLE' | 'ELLIPSE' | 'GROUP';
  name: string;
  styles: {
    width?: number | string;
    height?: number | string;
    backgroundColor?: string;
    borderRadius?: number | string;
    borderColor?: string;
    borderWidth?: number;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    fontWeight?: string | number;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    gap?: number;
    flexDirection?: 'row' | 'column';
    alignItems?: string;
    justifyContent?: string;
    opacity?: number;
    shadow?: string;
  };
  children?: FigmaNodeJSON[];
}

export interface ComponentInstance {
  props: Record<string, string | number | boolean>;
  label: string;
  tree: FigmaNodeJSON;
}

export interface ComponentDefinition {
  name: string;
  description: string;
  importPath: string;
  variants: Record<string, string[]>;
  defaultProps: Record<string, string | number | boolean>;
  subParts: Array<{ name: string; description: string }>;
  instances: ComponentInstance[];
}

export interface DesignSystemExport {
  metadata: {
    source: 'gluestack-nextjs';
    version: string;
    exportedAt: string;
    colorMode: 'light' | 'dark';
    totalComponents: number;
    totalTokens: number;
  };
  tokens: DesignTokens;
  components: ComponentDefinition[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Figma node builders
// ─────────────────────────────────────────────────────────────────────────────

/** Build a simple Figma node tree for a component variant */
function buildInstanceTree(
  entry: RegistryEntry,
  props: Record<string, string>
): FigmaNodeJSON {
  const hasVariant = (key: string, val: string) => props[key] === val;

  // Resolve semantic token → placeholder hex
  const resolveToken = (cls: string): string => {
    const tokenMap: Record<string, string> = {
      'bg-primary': '#2563EB',
      'bg-secondary': '#F1F5F9',
      'bg-destructive': '#DC2626',
      'bg-card': '#FFFFFF',
      'bg-transparent': 'transparent',
      'bg-accent': '#F8FAFC',
      'bg-muted': '#F1F5F9',
      'text-primary-foreground': '#FFFFFF',
      'text-foreground': '#0F172A',
      'text-secondary-foreground': '#334155',
      'text-muted-foreground': '#64748B',
      'text-destructive': '#DC2626',
      'border-border': '#E2E8F0',
    };
    return tokenMap[cls] ?? '#E2E8F0';
  };

  // Button node
  if (entry.name === 'Button') {
    const variant = props.variant ?? 'default';
    const size = props.size ?? 'default';

    const bgMap: Record<string, string> = {
      default: '#2563EB',
      destructive: '#DC2626',
      outline: 'transparent',
      secondary: '#F1F5F9',
      ghost: 'transparent',
      link: 'transparent',
    };
    const textColorMap: Record<string, string> = {
      default: '#FFFFFF',
      destructive: '#FFFFFF',
      outline: '#0F172A',
      secondary: '#334155',
      ghost: '#0F172A',
      link: '#2563EB',
    };
    const paddingMap: Record<string, { h: number; v: number }> = {
      default: { h: 16, v: 8 },
      sm: { h: 12, v: 4 },
      lg: { h: 32, v: 10 },
      icon: { h: 8, v: 8 },
    };

    const pad = paddingMap[size] ?? paddingMap['default'];

    return {
      type: 'FRAME',
      name: `Button / ${variant} / ${size}`,
      styles: {
        backgroundColor: bgMap[variant] ?? '#2563EB',
        borderRadius: 6,
        borderColor: variant === 'outline' ? '#E2E8F0' : 'transparent',
        borderWidth: variant === 'outline' ? 1 : 0,
        paddingTop: pad.v,
        paddingBottom: pad.v,
        paddingLeft: pad.h,
        paddingRight: pad.h,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: size === 'icon' ? 36 : undefined,
        width: size === 'icon' ? 36 : undefined,
      },
      children: [
        {
          type: 'TEXT',
          name: 'ButtonText',
          styles: {
            color: textColorMap[variant] ?? '#FFFFFF',
            fontSize: size === 'sm' ? 12 : 14,
            fontFamily: 'Inter',
            fontWeight: '500',
          },
        },
      ],
    };
  }

  // Badge node
  if (entry.name === 'Badge') {
    const variant = props.variant ?? 'default';
    const bgMap: Record<string, string> = {
      default: '#2563EB',
      secondary: '#F1F5F9',
      destructive: '#DC2626',
      outline: 'transparent',
    };
    return {
      type: 'FRAME',
      name: `Badge / ${variant}`,
      styles: {
        backgroundColor: bgMap[variant] ?? '#2563EB',
        borderRadius: 6,
        borderColor: variant === 'outline' ? '#E2E8F0' : 'transparent',
        borderWidth: variant === 'outline' ? 1 : 0,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      },
      children: [
        {
          type: 'TEXT',
          name: 'BadgeText',
          styles: {
            color:
              variant === 'default' || variant === 'destructive'
                ? '#FFFFFF'
                : '#0F172A',
            fontSize: 12,
            fontFamily: 'Inter',
            fontWeight: '500',
          },
        },
      ],
    };
  }

  // Alert node
  if (entry.name === 'Alert') {
    const variant = props.variant ?? 'default';
    return {
      type: 'FRAME',
      name: `Alert / ${variant}`,
      styles: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        borderColor: variant === 'destructive' ? '#DC2626' : '#E2E8F0',
        borderWidth: 1,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        width: 320,
      },
      children: [
        {
          type: 'RECTANGLE',
          name: 'AlertIcon (placeholder)',
          styles: {
            width: 16,
            height: 16,
            backgroundColor:
              variant === 'destructive' ? '#DC2626' : '#0F172A',
            borderRadius: 2,
          },
        },
        {
          type: 'TEXT',
          name: 'AlertText',
          styles: {
            color: variant === 'destructive' ? '#DC2626' : '#0F172A',
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: '500',
          },
        },
      ],
    };
  }

  // Input node
  if (entry.name === 'Input') {
    return {
      type: 'FRAME',
      name: 'Input',
      styles: {
        height: 36,
        width: 240,
        backgroundColor: 'transparent',
        borderRadius: 6,
        borderColor: '#E2E8F0',
        borderWidth: 1,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
      children: [
        {
          type: 'TEXT',
          name: 'Placeholder text',
          styles: {
            color: '#94A3B8',
            fontSize: 14,
            fontFamily: 'Inter',
            fontWeight: '400',
          },
        },
      ],
    };
  }

  // Generic fallback frame
  return {
    type: 'FRAME',
    name: `${entry.name}${Object.keys(props).length ? ' / ' + Object.values(props).join(' / ') : ''}`,
    styles: {
      backgroundColor: '#F8FAFC',
      borderRadius: 8,
      borderColor: '#E2E8F0',
      borderWidth: 1,
      paddingTop: 16,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      flexDirection: 'column',
      gap: 8,
    },
    children: [],
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Main assembler
// ─────────────────────────────────────────────────────────────────────────────

/** Build the complete DesignSystemExport payload */
export function buildDesignSystemExport(
  colorMode: 'light' | 'dark' = 'light'
): DesignSystemExport {
  const tokens = extractTokens();

  const components: ComponentDefinition[] = COMPONENT_REGISTRY.map((entry) => {
    const combinations = getVariantCombinations(entry);

    const instances: ComponentInstance[] = combinations.map((combo) => {
      const label = Object.keys(combo).length
        ? Object.entries(combo)
            .map(([k, v]) => `${k}=${v}`)
            .join(', ')
        : 'default';

      return {
        props: combo,
        label,
        tree: buildInstanceTree(entry, combo),
      };
    });

    const variantsRecord: Record<string, string[]> = {};
    for (const v of entry.variants) {
      variantsRecord[v.name] = v.values;
    }

    return {
      name: entry.name,
      description: entry.description,
      importPath: entry.importPath,
      variants: variantsRecord,
      defaultProps: entry.defaultProps,
      subParts: entry.subParts,
      instances,
    };
  });

  const totalTokens =
    Object.keys(tokens.colors).length +
    Object.keys(tokens.spacing).length +
    Object.keys(tokens.typography.fontSizes).length +
    Object.keys(tokens.radius).length +
    Object.keys(tokens.shadows).length;

  return {
    metadata: {
      source: 'gluestack-nextjs',
      version: '2.0.0',
      exportedAt: new Date().toISOString(),
      colorMode,
      totalComponents: components.length,
      totalTokens,
    },
    tokens,
    components,
  };
}
