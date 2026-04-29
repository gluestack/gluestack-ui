/**
 * Comprehensive test data for the gluestack-figma-plugin.
 * Covers all component types, edge cases, and new features.
 *
 * Run this in the Figma plugin by pasting the JSON output from
 * the /figma page, or use this as a reference for manual verification.
 */

// ── Test Categories ────────────────────────────────────────────────────────────

const testCategories = {

  // ── 1. Color Parsing Tests ────────────────────────────────────────────────
  colors: {
    'hex6': '#FF5733',
    'hex3': '#F00',
    'hex8_with_alpha': '#FF573380',
    'rgb': 'rgb(255, 87, 51)',
    'rgba': 'rgba(0, 128, 255, 0.5)',
    'transparent': 'transparent',
    'none': 'none',
    'black': 'rgb(0, 0, 0)',
    'white': 'rgb(255, 255, 255)',
  },

  // ── 2. Layout Tests ───────────────────────────────────────────────────────
  layouts: {
    'flex-row': 'flexDirection: row',
    'flex-col': 'flexDirection: column',
    'centered': 'flexDirection: column, alignItems: center, justifyContent: center',
    'space-between': 'flexDirection: row, justifyContent: space-between',
    'with-padding': 'paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16',
    'with-gap': 'gap: 12',
  },

  // ── 3. Border Radius Tests ────────────────────────────────────────────────
  borderRadius: {
    'none': 0,
    'sm': 6,
    'md': 8,
    'lg': 10,
    'xl': 14,
    '2xl': 16,
    '3xl': 24,
    'full': 9999,
  },

  // ── 4. Typography Tests ───────────────────────────────────────────────────
  typography: {
    'font-weights': ['100-thin', '200-extralight', '300-light', '400-normal', '500-medium', '600-semibold', '700-bold', '800-extrabold', '900-black'],
    'font-sizes': ['10-2xs', '12-xs', '14-sm', '16-base', '18-lg', '20-xl', '24-2xl', '30-3xl', '36-4xl', '48-5xl'],
    'text-align': ['left', 'center', 'right', 'justify'],
    'text-decoration': ['underline', 'line-through'],
    'text-transform': ['uppercase', 'lowercase', 'capitalize'],
  },

  // ── 5. State Variants Tests ───────────────────────────────────────────────
  stateVariants: {
    'Button-isDisabled': { variant: 'default', size: 'default', isDisabled: 'true' },
    'Checkbox-isChecked': { size: 'md', isChecked: 'true', isDisabled: 'false' },
    'Checkbox-isDisabled': { size: 'md', isChecked: 'false', isDisabled: 'true' },
    'Radio-isChecked': { size: 'md', isChecked: 'true', isDisabled: 'false' },
    'Switch-isChecked': { size: 'md', isChecked: 'true', isDisabled: 'false' },
    'Input-isDisabled': { isDisabled: 'true', isInvalid: 'false' },
    'Input-isInvalid': { isDisabled: 'false', isInvalid: 'true' },
  },

  // ── 6. Edge Cases ──────────────────────────────────────────────────────────
  edgeCases: {
    'transparent-background': { backgroundColor: 'transparent' },
    'zero-dimensions': { width: 0, height: 0 },
    'percentage-width': { width: '100%' },
    'per-corner-radius': {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 8,
      borderBottomLeftRadius: 0,
    },
    'opacity': { opacity: 0.5 },
    'dashed-border': { borderWidth: 2, borderColor: '#E2E8F0', borderStyle: 'dashed' },
    'overflow-hidden': { overflow: 'hidden' },
    'absolute-position': { position: 'absolute', top: 10, left: 10 },
    'shadow': { boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)' },
  },
};

// ── Sample Design System Export for Manual Testing ─────────────────────────────

const sampleDesignSystemExport = {
  metadata: {
    source: 'test-comprehensive',
    version: '2.1.0',
    exportedAt: new Date().toISOString(),
    colorMode: 'light',
    totalComponents: 4,
    totalTokens: 22,
  },
  tokens: {
    colors: {
      light: {
        'primary': '23 23 23',
        'primary-foreground': '250 250 250',
        'secondary': '245 245 245',
        'secondary-foreground': '23 23 23',
        'background': '255 255 255',
        'foreground': '10 10 10',
        'muted': '245 245 245',
        'muted-foreground': '115 115 115',
        'destructive': '231 0 11',
        'border': '229 229 229',
        'input': '229 229 229',
        'card': '255 255 255',
      },
      dark: {
        'primary': '255 245 245',
        'primary-foreground': '23 23 23',
        'secondary': '38 38 38',
        'secondary-foreground': '250 250 250',
        'background': '10 10 10',
        'foreground': '250 250 250',
        'muted': '38 38 38',
        'muted-foreground': '161 161 161',
        'destructive': '255 100 103',
        'border': '46 46 46',
        'input': '46 46 46',
        'card': '23 23 23',
      },
    },
    spacing: { '1': 4, '2': 8, '3': 12, '4': 16, '6': 24, '8': 32 },
    typography: {
      fontSizes: { xs: '12px', sm: '14px', base: '16px', lg: '18px', xl: '20px' },
      fontWeights: { normal: '400', medium: '500', semibold: '600', bold: '700' },
      fontFamilies: { sans: 'Inter', mono: 'Source Code Pro' },
      lineHeights: { tight: '1.25', normal: '1.5', relaxed: '1.625' },
      letterSpacings: { normal: '0em', wide: '0.025em' },
    },
    radius: { none: '0px', sm: '6px', md: '8px', lg: '10px', full: '9999px' },
    shadows: {
      'soft-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
      'soft-2': '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
    },
  },
  components: [
    // Button with isDisabled state
    {
      name: 'TestButton',
      description: 'Testing state variants and text properties',
      variants: {
        'variant': ['default', 'outline', 'ghost'],
        'size': ['sm', 'md'],
        'isDisabled': ['false', 'true'],
      },
      defaultProps: { variant: 'default', size: 'md', isDisabled: 'false' },
      subParts: [
        { name: 'ButtonText', description: 'Button label' },
        { name: 'ButtonIcon', description: 'Button icon' },
      ],
      instances: [
        {
          props: { variant: 'default', size: 'md', isDisabled: 'false' },
          label: 'default, md, enabled',
          tree: {
            type: 'FRAME',
            name: 'ButtonContainer',
            styles: {
              width: '100px',
              height: '36px',
              backgroundColor: 'rgb(23, 23, 23)',
              borderRadius: 6,
              flexDirection: 'row',
              paddingLeft: 16,
              paddingRight: 16,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: [
              {
                type: 'TEXT',
                name: 'Click me',
                text: 'Click me',
                styles: { color: 'rgb(250, 250, 250)', fontSize: 14, fontWeight: '500' },
              },
            ],
          },
        },
        {
          props: { variant: 'default', size: 'md', isDisabled: 'true' },
          label: 'default, md, disabled',
          tree: {
            type: 'FRAME',
            name: 'ButtonContainer',
            styles: {
              width: '100px',
              height: '36px',
              backgroundColor: 'rgb(23, 23, 23)',
              borderRadius: 6,
              flexDirection: 'row',
              paddingLeft: 16,
              paddingRight: 16,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.5,
            },
            children: [
              {
                type: 'TEXT',
                name: 'Click me',
                text: 'Click me',
                styles: { color: 'rgb(250, 250, 250)', fontSize: 14, fontWeight: '500' },
              },
            ],
          },
        },
      ],
    },
    // Card with dashed border and shadow
    {
      name: 'TestCard',
      description: 'Testing per-corner radius, shadows, and dashed borders',
      variants: {},
      defaultProps: {},
      subParts: [
        { name: 'CardTitle', description: 'Card title' },
        { name: 'CardDescription', description: 'Card description' },
      ],
      instances: [
        {
          props: {},
          label: 'default',
          tree: {
            type: 'FRAME',
            name: 'CardRoot',
            styles: {
              width: '300px',
              height: '200px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 12,
              borderWidth: 2,
              borderColor: 'rgb(229, 229, 229)',
              borderStyle: 'dashed',
              paddingTop: 20,
              paddingLeft: 20,
              boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -2px rgba(0, 0, 0, 0.10)',
            },
            children: [
              {
                type: 'TEXT',
                name: 'Card Title',
                text: 'Card Title',
                styles: { color: 'rgb(10, 10, 10)', fontSize: 16, fontWeight: '600' },
              },
              {
                type: 'TEXT',
                name: 'Card Description',
                text: 'A short description goes here.',
                styles: { color: 'rgb(115, 115, 115)', fontSize: 14, fontWeight: '400', lineHeight: '1.5' },
              },
            ],
          },
        },
      ],
    },
    // Test Switch (no subParts, needs implicit thumb)
    {
      name: 'TestSwitch',
      description: 'Testing Switch component with thumb',
      variants: {
        'size': ['sm', 'md'],
        'isChecked': ['false', 'true'],
      },
      defaultProps: { size: 'md', isChecked: 'false' },
      subParts: [],
      instances: [
        {
          props: { size: 'md', isChecked: 'false' },
          label: 'md, off',
          tree: {
            type: 'FRAME',
            name: 'SwitchContainer',
            styles: {
              width: '44px',
              height: '24px',
              backgroundColor: 'rgb(229, 229, 229)',
              borderRadius: 9999,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: [
              {
                type: 'ELLIPSE',
                name: 'SwitchThumb',
                styles: {
                  width: 20,
                  height: 20,
                  backgroundColor: 'rgb(10, 10, 10)',
                  borderRadius: 9999,
                },
              },
            ],
          },
        },
        {
          props: { size: 'md', isChecked: 'true' },
          label: 'md, on',
          tree: {
            type: 'FRAME',
            name: 'SwitchContainer',
            styles: {
              width: '44px',
              height: '24px',
              backgroundColor: 'rgb(23, 23, 23)',
              borderRadius: 9999,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: [
              {
                type: 'ELLIPSE',
                name: 'SwitchThumb',
                styles: {
                  width: 20,
                  height: 20,
                  backgroundColor: 'rgb(250, 250, 250)',
                  borderRadius: 9999,
                },
              },
            ],
          },
        },
      ],
    },
    // Test per-corner radius
    {
      name: 'TestPerCornerRadius',
      description: 'Testing per-corner border radius',
      variants: {},
      defaultProps: {},
      subParts: [],
      instances: [
        {
          props: {},
          label: 'default',
          tree: {
            type: 'RECTANGLE',
            name: 'PerCornerRect',
            styles: {
              width: '100px',
              height: '60px',
              backgroundColor: 'rgb(99, 102, 241)',
              borderTopLeftRadius: 16,
              borderBottomRightRadius: 16,
            },
          },
        },
      ],
    },
  ],
};

// ── Verification Script (run in Figma console after import) ───────────────────

const verificationScript = `
  // Verify color variables were created with proper scopes
  const collections = figma.variables.getLocalVariableCollectionsAsync().then(collections => {
    console.log('Collections:', collections.map(c => ({ name: c.name, modes: c.modes.length, vars: c.variableIds.length })));

    // Check variable scopes
    for (const col of collections) {
      for (const varId of col.variableIds) {
        figma.variables.getVariableByIdAsync(varId).then(v => {
          console.log('  Variable:', v.name, '| Type:', v.resolvedType, '| Scopes:', v.scopes);
        });
      }
    }
  });

  // Verify text styles were created
  const textStyles = figma.getLocalTextStyles();
  console.log('Text styles:', textStyles.map(s => s.name));

  // Verify effect styles were created
  const effectStyles = figma.getLocalEffectStyles();
  console.log('Effect styles:', effectStyles.map(s => s.name));

  // Verify components were created with property definitions
  for (const page of figma.root.children) {
    const components = page.findAll(n => n.type === 'COMPONENT_SET');
    console.log('Component sets on page', page.name, ':', components.map(c => ({
      name: c.name,
      properties: Object.keys(c.componentPropertyDefinitions),
      variantCount: c.children.length
    })));
  }
`;

// Export for use
if (typeof module !== 'undefined') {
  module.exports = { testCategories, sampleDesignSystemExport, verificationScript };
}